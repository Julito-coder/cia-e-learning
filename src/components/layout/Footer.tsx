import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t-2 bg-primary text-primary-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/cia-logo-2.jpg" alt="CIA" className="h-12 rounded-xl mb-3" />
            <p className="text-sm opacity-80 font-semibold">
              Centre International d'Antibes — École de FLE depuis 1985.
            </p>
          </div>
          <div>
            <h4 className="font-display text-base mb-3">Apprendre</h4>
            <ul className="space-y-2 text-sm opacity-80 font-semibold">
              <li><Link to="/catalogue" className="hover:opacity-100 transition-opacity">📚 Catalogue</Link></li>
              <li><Link to="/test-niveau" className="hover:opacity-100 transition-opacity">📝 Test de niveau</Link></li>
              <li><Link to="/glossaire" className="hover:opacity-100 transition-opacity">📖 Glossaire</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-base mb-3">L'école</h4>
            <ul className="space-y-2 text-sm opacity-80 font-semibold">
              <li><a href="https://www.cia-france.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">🌐 cia-france.com</a></li>
              <li><a href="https://www.cia-france.com/francais-et-vous/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">📰 Le Français & Vous</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-base mb-3">Légal</h4>
            <ul className="space-y-2 text-sm opacity-80 font-semibold">
              <li><Link to="/mentions-legales" className="hover:opacity-100 transition-opacity">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="hover:opacity-100 transition-opacity">Confidentialité</Link></li>
              <li><Link to="/cgv" className="hover:opacity-100 transition-opacity">CGV</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60 font-semibold">
          © {new Date().getFullYear()} Centre International d'Antibes. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
