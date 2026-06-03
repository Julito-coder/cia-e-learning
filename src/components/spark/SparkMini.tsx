import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * SparkMini — version simplifiée de Spark pour les tailles ≤ 48px.
 * Charte v2 §2 : « À 16–48px : version mini SVG simplifiée (blob + 2 points blancs,
 * sans bouche). »
 *
 * Forme : blob ovale (flamme stylisée), gradient bleu charte vertical,
 * deux yeux blancs sans bouche. Halo optionnel `g-spark` derrière.
 * Pas de mood — la lisibilité prime sous 48px.
 */

export interface SparkMiniProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Square size in px. Default 32. */
  size?: number;
  /** Render the radial halo behind the blob. Default false. */
  halo?: boolean;
  /** Accessible label. Default "Spark". */
  label?: string;
}

export const SparkMini = React.forwardRef<HTMLDivElement, SparkMiniProps>(
  ({ size = 32, halo = false, label = 'Spark', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative inline-block select-none', className)}
        style={{ width: size, height: size }}
        aria-label={label}
        role="img"
        {...props}
      >
        {halo && (
          <div
            className="absolute inset-0 rounded-full bg-g-spark opacity-50 blur-md"
            aria-hidden="true"
          />
        )}

        <svg
          viewBox="0 0 100 100"
          className="relative w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sparkMiniBlob" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%"   stopColor="hsl(var(--cia-spark-deep))" />
              <stop offset="55%"  stopColor="hsl(var(--cia-spark-mid))" />
              <stop offset="100%" stopColor="hsl(var(--cia-spark-light))" />
            </linearGradient>
          </defs>

          {/* Blob — flamme stylisée mini (base resserrée, sommet pointu) */}
          <path
            d="M50 8 C 66 28, 78 42, 78 62 C 78 80, 66 92, 50 92 C 34 92, 22 80, 22 62 C 22 42, 34 28, 50 8 Z"
            fill="url(#sparkMiniBlob)"
          />

          {/* 2 yeux blancs — pas de bouche */}
          <circle cx="42" cy="60" r="6" fill="white" />
          <circle cx="58" cy="60" r="6" fill="white" />
        </svg>
      </div>
    );
  },
);
SparkMini.displayName = 'SparkMini';
