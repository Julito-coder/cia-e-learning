import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type League = 'bronze' | 'argent' | 'or';
const LEAGUES: League[] = ['bronze', 'argent', 'or'];

const promote = (l: League): League => (l === 'bronze' ? 'argent' : l === 'argent' ? 'or' : 'or');
const demote = (l: League): League => (l === 'or' ? 'argent' : l === 'argent' ? 'bronze' : 'bronze');

function previousMondayParis(now = new Date()): string {
  // Compute Monday in Europe/Paris of the *previous* completed week.
  const paris = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
  const dow = (paris.getDay() + 6) % 7; // 0 = Monday
  const thisMonday = new Date(paris);
  thisMonday.setHours(0, 0, 0, 0);
  thisMonday.setDate(paris.getDate() - dow);
  const prev = new Date(thisMonday);
  prev.setDate(thisMonday.getDate() - 7);
  return prev.toISOString().slice(0, 10);
}

function currentMondayParis(now = new Date()): string {
  const paris = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
  const dow = (paris.getDay() + 6) % 7;
  const monday = new Date(paris);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(paris.getDate() - dow);
  return monday.toISOString().slice(0, 10);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  const weekStart = previousMondayParis();
  const newPeriod = currentMondayParis();
  const summary: Record<string, { promoted: number; demoted: number; stayed: number }> = {};

  for (const league of LEAGUES) {
    summary[league] = { promoted: 0, demoted: 0, stayed: 0 };

    const { data: members, error } = await supabase
      .from('profiles')
      .select('user_id, weekly_xp, league')
      .eq('is_active', true)
      .eq('league', league)
      .order('weekly_xp', { ascending: false });

    if (error || !members) continue;
    const n = members.length;
    if (n === 0) continue;

    // Promotion / relegation slots
    const promoteCount = n >= 6 ? 3 : n >= 2 ? 1 : 0;
    const demoteCount = n >= 6 ? 3 : n >= 2 ? 1 : 0;

    for (let i = 0; i < n; i++) {
      const m = members[i];
      const rank = i + 1;
      let outcome: 'promoted' | 'demoted' | 'stayed' = 'stayed';
      let nextLeague: League = league;

      if (i < promoteCount && league !== 'or') {
        outcome = 'promoted';
        nextLeague = promote(league);
      } else if (i >= n - demoteCount && league !== 'bronze') {
        outcome = 'demoted';
        nextLeague = demote(league);
      }
      summary[league][outcome]++;

      await supabase.from('league_history').insert({
        user_id: m.user_id,
        week_start: weekStart,
        league_before: league,
        league_after: nextLeague,
        final_rank: rank,
        weekly_xp_total: m.weekly_xp ?? 0,
        outcome,
      });

      await supabase
        .from('profiles')
        .update({ league: nextLeague })
        .eq('user_id', m.user_id);
    }
  }

  // Reset weekly counters for everyone
  await supabase
    .from('profiles')
    .update({ weekly_xp: 0, weekly_period_start: newPeriod })
    .eq('is_active', true);

  return new Response(JSON.stringify({ ok: true, weekStart, summary }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});