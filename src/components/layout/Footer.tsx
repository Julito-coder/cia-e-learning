import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t-2 bg-primary text-primary-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/cia-logo-2.jpg" alt="CIA" className="h-12 rounded-xl mb-3" />
            <p className="text-sm opacity-80 font-semibold">
              {t('footer.school')}
            </p>
          </div>
          <div>
            <h4 className="font-display text-base mb-3">{t('footer.learn')}</h4>
            <ul className="space-y-2 text-sm opacity-80 font-semibold">
              <li><Link to="/catalogue" className="hover:opacity-100 transition-opacity">📚 {t('nav.catalogue')}</Link></li>
              <li><Link to="/test-niveau" className="hover:opacity-100 transition-opacity">📝 {t('nav.test')}</Link></li>
              <li><Link to="/glossaire" className="hover:opacity-100 transition-opacity">📖 {t('nav.glossary')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-base mb-3">{t('footer.theSchool')}</h4>
            <ul className="space-y-2 text-sm opacity-80 font-semibold">
              <li><a href="https://www.cia-france.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">🌐 cia-france.com</a></li>
              <li><a href="https://www.cia-france.com/francais-et-vous/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">📰 Le Français & Vous</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-base mb-3">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm opacity-80 font-semibold">
              <li><Link to="/mentions-legales" className="hover:opacity-100 transition-opacity">{t('footer.legalNotice')}</Link></li>
              <li><Link to="/confidentialite" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</Link></li>
              <li><Link to="/cgv" className="hover:opacity-100 transition-opacity">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60 font-semibold">
          {t('footer.rights', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
