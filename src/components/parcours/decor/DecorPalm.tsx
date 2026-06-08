/**
 * Palme stylisée — flat éditorial.
 * Couleurs charte : tronc `cia-blue-700`, feuilles `success-600`.
 */
export function DecorPalm({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Tronc */}
      <path
        d="M42 70 Q40 50 44 32"
        stroke="hsl(var(--cia-blue-700))"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Feuilles arquées (palmes) */}
      <g stroke="hsl(var(--success-600))" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M44 32 Q30 22 14 24" />
        <path d="M44 32 Q60 22 72 28" />
        <path d="M44 32 Q34 18 22 12" />
        <path d="M44 32 Q56 18 66 14" />
        <path d="M44 32 Q44 18 40 8" />
      </g>
      {/* Petite touche dorée — un fruit (micro-accent gradient) */}
      <circle cx="46" cy="34" r="2" fill="hsl(var(--cia-gold-500))" opacity="0.7" />
    </svg>
  );
}
