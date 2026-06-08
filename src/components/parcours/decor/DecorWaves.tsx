/**
 * 3 lignes de vagues stylisées — flat éditorial.
 * Couleurs charte : `cia-blue-400` (clair) / `cia-blue-500` (moyen) /
 * `cia-spark-mid` (accent).
 */
export function DecorWaves({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g strokeLinecap="round" fill="none">
        <path
          d="M4 12 Q14 6 24 12 T44 12 T64 12 T84 12"
          stroke="hsl(var(--cia-blue-400))"
          strokeWidth="2"
        />
        <path
          d="M4 22 Q14 16 24 22 T44 22 T64 22 T84 22"
          stroke="hsl(var(--cia-blue-500))"
          strokeWidth="2.2"
        />
        <path
          d="M4 32 Q14 26 24 32 T44 32 T64 32 T84 32"
          stroke="hsl(var(--cia-spark-mid))"
          strokeWidth="2"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}
