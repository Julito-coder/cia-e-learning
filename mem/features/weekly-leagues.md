---
name: Weekly Leagues
description: Bronze/Argent/Or weekly competitive leagues with promotion/relegation
type: feature
---
3 divisions: Bronze < Argent < Or. Users earn weekly_xp via addXP() (RPC add_weekly_xp does atomic increment + lazy reset on Monday Europe/Paris).

Promotion/relegation runs every Monday 00h05 Paris (cron 5 22 * * 0 UTC) via edge function `weekly-league-rotation`:
- Top 3 promoted (or top 1 if league has 2-5 members)
- Bottom 3 relegated (or bottom 1 if 2-5 members)
- Or-league top stays. Bronze-league bottom stays.
- All weekly_xp reset to 0 after rotation. league_history row inserted per user.

UI: /classement default tab "🏆 Ligue" via LeagueView, with countdown to next Monday, league selector, promo/safe/relegation zones, and previous-week result banner from league_history.
