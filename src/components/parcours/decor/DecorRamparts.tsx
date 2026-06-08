/**
 * Silhouette des remparts d'Antibes — flat éditorial géométrique.
 * Couleurs charte : `cia-blue-700` (silhouette pleine).
 */
export function DecorRamparts({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Base */}
      <path
        d="
          M 4 44
          L 4 32 L 10 32 L 10 26 L 16 26 L 16 32 L 22 32 L 22 26 L 28 26 L 28 32
          L 34 32 L 34 18 L 46 18 L 46 32 L 52 32 L 52 26 L 58 26 L 58 32 L 64 32
          L 64 26 L 70 26 L 70 32 L 76 32 L 76 44 Z
        "
        fill="hsl(var(--cia-blue-700))"
        opacity="0.9"
      />
      {/* Tour centrale haute */}
      <rect x="38" y="10" width="4" height="10" fill="hsl(var(--cia-blue-700))" opacity="0.9" />
      {/* Petite fenêtre éclairée — micro-accent or */}
      <rect x="39" y="22" width="2" height="3" fill="hsl(var(--cia-gold-400))" opacity="0.85" />
    </svg>
  );
}
