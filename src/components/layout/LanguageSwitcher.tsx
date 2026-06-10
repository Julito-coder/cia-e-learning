import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'es', label: 'Español',  flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', label: 'Русский',  flag: '🇷🇺' },
];

const SUPPORTED = LANGUAGES.map((l) => l.code);
const LS_KEY = 'cia-interface-lang';

export function LanguageSwitcher({ compact = true }: { compact?: boolean }) {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  // When the user logs in, pull their stored preference from Supabase.
  // localStorage already handled the bootstrap before this hook runs, so
  // we only override if Supabase has an explicit preference different
  // from what's currently active.
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    supabase
      .from('profiles')
      .select('interface_language')
      .eq('user_id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        const remote = (data as { interface_language?: string } | null)?.interface_language;
        if (remote && SUPPORTED.includes(remote) && remote !== i18n.language) {
          i18n.changeLanguage(remote);
          try { localStorage.setItem(LS_KEY, remote); } catch { /* noop */ }
        }
      });
    return () => { cancelled = true; };
  }, [user, i18n]);

  const handleChange = (code: string) => {
    if (i18n.language === code) return;
    i18n.changeLanguage(code);
    try { localStorage.setItem(LS_KEY, code); } catch { /* noop */ }
    if (user) {
      // Fire-and-forget — persistence failure shouldn't block the UX
      // (the localStorage write is the immediate source of truth on
      // refresh). Errors are logged so we can spot RLS misconfig.
      supabase
        .from('profiles')
        .update({ interface_language: code })
        .eq('user_id', user.id)
        .then(({ error }) => {
          if (error) console.warn('[i18n] failed to persist language:', error.message);
        });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 font-medium rounded-xl">
          <Languages className="h-4 w-4" />
          {compact ? <span className="uppercase">{current.code}</span> : <span>{current.flag} {current.label}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px] rounded-xl">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => handleChange(lang.code)} className="gap-2 rounded-lg">
            <span>{lang.flag}</span>
            <span className="flex-1">{lang.label}</span>
            {lang.code === current.code && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
