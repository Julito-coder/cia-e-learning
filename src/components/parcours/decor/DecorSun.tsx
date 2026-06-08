/**
 * Arc de soleil méditerranéen — flat éditorial.
 * Or charte autorisé uniquement via gradient (charte v2 §3) : on utilise
 * `g-sun` pour le disque + rayons fins en `cia-gold-400` stroke.
 */
export function DecorSun({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="decor-sun-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(45 100% 83%)" />
          <stop offset="60%" stopColor="hsl(var(--cia-gold-300))" />
          <stop offset="100%" stopColor="hsl(var(--cia-gold-500))" />
        </linearGradient>
      </defs>
      {/* Disque (gradient charte g-sun, jamais aplat doré) */}
      <circle cx="40" cy="40" r="16" fill="url(#decor-sun-grad)" />
      {/* Rayons fins */}
      <g stroke="hsl(var(--cia-gold-500))" strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
        <line x1="40" y1="6" x2="40" y2="16" />
        <line x1="40" y1="64" x2="40" y2="74" />
        <line x1="6" y1="40" x2="16" y2="40" />
        <line x1="64" y1="40" x2="74" y2="40" />
        <line x1="16" y1="16" x2="22" y2="22" />
        <line x1="58" y1="58" x2="64" y2="64" />
        <line x1="64" y1="16" x2="58" y2="22" />
        <line x1="16" y1="64" x2="22" y2="58" />
      </g>
    </svg>
  );
}
