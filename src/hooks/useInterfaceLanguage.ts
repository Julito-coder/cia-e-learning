import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const LS_KEY = 'cia-interface-lang';
const SUPPORTED = ['fr', 'en', 'es', 'de', 'it', 'ru'] as const;
type SupportedLang = (typeof SUPPORTED)[number];

function isSupportedLang(code: string | null | undefined): code is SupportedLang {
  return !!code && (SUPPORTED as readonly string[]).includes(code);
}

/**
 * Sync interface language between DB (profiles.interface_language),
 * i18n runtime, and localStorage.
 * - On user login: DB → i18n + LS (if different).
 * - Exposes setLanguage() that writes everywhere.
 */
export function useInterfaceLanguage() {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  const synced = useRef(false);

  useEffect(() => {
    if (!user) { synced.current = false; return; }
    let cancelled = false;
    supabase.from('profiles').select('interface_language').eq('user_id', user.id).maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        const lang = data?.interface_language;
        if (isSupportedLang(lang) && lang !== i18n.language) {
          i18n.changeLanguage(lang);
          try { localStorage.setItem(LS_KEY, lang); } catch { /* noop */ }
        }
        synced.current = true;
      });
    return () => { cancelled = true; };
  }, [user, i18n]);

  const setLanguage = async (code: string) => {
    if (!isSupportedLang(code)) return;
    await i18n.changeLanguage(code);
    try { localStorage.setItem(LS_KEY, code); } catch { /* noop */ }
    if (user) {
      await supabase.from('profiles').update({ interface_language: code }).eq('user_id', user.id);
    }
  };

  return { language: i18n.language, setLanguage, supported: SUPPORTED };
}