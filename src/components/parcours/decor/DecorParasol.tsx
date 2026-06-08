/**
 * Parasol de plage — flat éditorial.
 * Couleurs charte : toile `cia-red-400`, structure `cia-blue-700`.
 */
export function DecorParasol({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Toile (demi-cercle) — 4 segments alternés rouge / blanc */}
      <path d="M14 38 Q14 16 40 16 Q66 16 66 38 Z" fill="hsl(var(--cia-red-400))" opacity="0.85" />
      <path d="M14 38 Q14 22 26 17 L26 38 Z" fill="white" opacity="0.7" />
      <path d="M54 17 Q66 22 66 38 L54 38 Z" fill="white" opacity="0.7" />
      <line x1="40" y1="16" x2="40" y2="38" stroke="hsl(var(--cia-blue-700))" strokeWidth="0.8" />
      {/* Mât */}
      <line x1="40" y1="16" x2="40" y2="68" stroke="hsl(var(--cia-blue-700))" strokeWidth="2.5" strokeLinecap="round" />
      {/* Sable (petite ligne) */}
      <path
        d="M12 70 Q40 74 68 70"
        stroke="hsl(var(--cia-gold-300))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
