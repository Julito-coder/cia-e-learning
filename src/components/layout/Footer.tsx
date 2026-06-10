import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-cia-blue-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo-cia-white.png" alt="Centre International d'Antibes" className="h-16 w-auto" loading="lazy" decoding="async" />
            </div>
            <p className="text-sm opacity-80 font-medium">{t('footer.tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-base mb-3">{t('footer.section_navigation')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/catalogue" className="hover:opacity-100 transition-opacity">{t('nav.catalogue')}</Link></li>
              <li><Link to="/programme" className="hover:opacity-100 transition-opacity">{t('nav.curriculum')}</Link></li>
              <li><Link to="/glossaire" className="hover:opacity-100 transition-opacity">{t('nav.glossary')}</Link></li>
              <li><Link to="/defi-du-jour" className="hover:opacity-100 transition-opacity">{t('nav.daily_challenge')}</Link></li>
            </ul>
          </div>

          {/* Apprentissage */}
          <div>
            <h4 className="font-display text-base mb-3">{t('footer.section_learning')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/programme" className="hover:opacity-100 transition-opacity">{t('footer.cefr_levels')}</Link></li>
              <li><Link to="/test-niveau" className="hover:opacity-100 transition-opacity">{t('footer.placement_test')}</Link></li>
              <li><Link to="/catalogue" className="hover:opacity-100 transition-opacity">{t('footer.pricing')}</Link></li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h4 className="font-display text-base mb-3">{t('footer.section_about')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="https://www.cia-france.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">{t('footer.about_cia')}</a></li>
              <li><Link to="/mentions-legales" className="hover:opacity-100 transition-opacity">{t('footer.legal')}</Link></li>
              <li><Link to="/confidentialite" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</Link></li>
              <li><Link to="/cgv" className="hover:opacity-100 transition-opacity">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">{t('footer.copyright', { year })}</p>
          <div className="flex items-center gap-3">
            <LanguageSwitcher compact={false} />
            <div className="flex items-center gap-1 opacity-80">
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg hover:bg-white/10 transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-white/10 transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-white/10 transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
