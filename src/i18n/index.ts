import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './locales/fr.json';
import en from './locales/en.json';
import es from './locales/es.json';
import de from './locales/de.json';
import it from './locales/it.json';
import ru from './locales/ru.json';

const SUPPORTED = ['fr', 'en', 'es', 'de', 'it', 'ru'] as const;
type Supported = typeof SUPPORTED[number];

/**
 * Priority order :
 *   1. Explicit user choice persisted in localStorage (synced from
 *      Supabase by LanguageSwitcher once the user logs in).
 *   2. Browser preference (`navigator.language`), if supported.
 *   3. French as the final fallback.
 *
 * We resolve this synchronously at module-load so the very first render
 * already uses the right language and there is no flash of French UI.
 */
function detectInitialLang(): Supported {
  if (typeof window === 'undefined') return 'fr';
  const stored = localStorage.getItem('cia-interface-lang');
  if (stored && (SUPPORTED as readonly string[]).includes(stored)) {
    return stored as Supported;
  }
  const nav = (navigator.language || '').slice(0, 2).toLowerCase();
  if ((SUPPORTED as readonly string[]).includes(nav)) return nav as Supported;
  return 'fr';
}

i18n.use(initReactI18next).init({
  resources: { fr: { translation: fr }, en: { translation: en }, es: { translation: es }, de: { translation: de }, it: { translation: it }, ru: { translation: ru } },
  lng: detectInitialLang(),
  fallbackLng: 'fr',
  supportedLngs: SUPPORTED as unknown as string[],
  interpolation: { escapeValue: false },
});

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language;
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  });
}

if (import.meta.env?.DEV) {
  i18n.on('missingKey', (_lngs, ns, key) => {
    // eslint-disable-next-line no-console
    console.warn(`[i18n] missing key: ${ns}:${key}`);
  });
}

export default i18n;
