import { motion } from 'framer-motion';

interface AuthTabsProps {
  value: 'login' | 'signup';
  onChange: (v: 'login' | 'signup') => void;
}

export function AuthTabs({ value, onChange }: AuthTabsProps) {
  const tabs: Array<{ id: 'login' | 'signup'; label: string }> = [
    { id: 'login', label: 'Connexion' },
    { id: 'signup', label: 'Inscription' },
  ];
  return (
    <div className="relative grid grid-cols-2 bg-muted/60 rounded-xl p-1 mb-5">
      {tabs.map((t) => {
        const active = value === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            className={`relative z-10 py-2 text-sm font-medium rounded-lg transition-colors ${
              active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {active && (
              <motion.span
                layoutId="auth-tab-indicator"
                className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                style={{ zIndex: -1 }}
              />
            )}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}