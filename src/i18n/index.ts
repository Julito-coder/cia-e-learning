import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './locales/fr.json';
import en from './locales/en.json';
import es from './locales/es.json';
import de from './locales/de.json';
import it from './locales/it.json';
import ru from './locales/ru.json';

const STORED_LANG = typeof window !== 'undefined' ? localStorage.getItem('cia-interface-lang') : null;

i18n.use(initReactI18next).init({
  resources: { fr: { translation: fr }, en: { translation: en }, es: { translation: es }, de: { translation: de }, it: { translation: it }, ru: { translation: ru } },
  lng: STORED_LANG || 'fr',
  fallbackLng: 'fr',
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
