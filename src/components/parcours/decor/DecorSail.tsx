/**
 * Voile méditerranéenne — Côte d'Azur, motif flat éditorial.
 * Couleurs charte CIA : voile `cia-blue-400`, coque `cia-blue-700`.
 * Pas d'asset externe : SVG inline 80×80.
 */
export function DecorSail({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Mât */}
      <line x1="42" y1="14" x2="42" y2="58" stroke="hsl(var(--cia-blue-700))" strokeWidth="1.5" strokeLinecap="round" />
      {/* Grand-voile */}
      <path
        d="M42 14 L42 58 L18 58 Q28 38 42 14 Z"
        fill="hsl(var(--cia-blue-400))"
        opacity="0.9"
      />
      {/* Voile d'avant */}
      <path
        d="M42 18 L42 58 L60 58 Q52 38 42 18 Z"
        fill="hsl(var(--cia-blue-500))"
        opacity="0.7"
      />
      {/* Coque (arc) */}
      <path
        d="M12 60 Q40 70 68 60"
        stroke="hsl(var(--cia-blue-700))"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
