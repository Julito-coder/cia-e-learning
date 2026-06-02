import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * SparkStatic — pure-SVG rendition of the Spark mascot, used as the
 * canonical fallback for the Lottie-driven `<Spark>` orchestrator.
 *
 * Rendered when:
 *  - prefers-reduced-motion: reduce is on
 *  - the Lottie JSON for the requested mood is still loading
 *  - the Lottie load failed
 *  - the caller passes `static={true}`
 *  - the mood has no Lottie animation (e.g. "thinking")
 *
 * The Lottie player only renders the flame itself; halo + embers stay as
 * CSS layers handled by the orchestrator so the look stays consistent
 * across both renderers.
 */

export type SparkMood =
  | 'idle'
  | 'talking'
  | 'celebrating'
  | 'encouraging'
  | 'sad'
  | 'thinking';

export interface SparkStaticProps extends React.HTMLAttributes<HTMLDivElement> {
  mood?: SparkMood;
  /** Square size in px. Default 96. */
  size?: number;
  /** Render the radial halo behind the flame. Default true. */
  halo?: boolean;
  /** Render rising ember sparks. Default false. */
  embers?: boolean;
  /** Disable all CSS animations (matches prefers-reduced-motion behavior). */
  motionless?: boolean;
}

const moodToFlameAnim: Record<SparkMood, string> = {
  idle: 'anim-flame-breathe',
  talking: 'anim-flame-talk',
  celebrating: 'anim-flame-celebrate',
  encouraging: 'anim-flame-bounce',
  sad: 'anim-flame-sad',
  thinking: 'anim-flame-breathe',
};

function SparkFace({ mood }: { mood: SparkMood }) {
  const eyeFill = 'hsl(var(--cia-blue-900))';

  const eyes = (() => {
    switch (mood) {
      case 'celebrating':
        return (
          <>
            <path d="M40 58 q4 -5 8 0" stroke={eyeFill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M52 58 q4 -5 8 0" stroke={eyeFill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        );
      case 'sad':
        return (
          <>
            <path d="M40 60 q4 4 8 0" stroke={eyeFill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M52 60 q4 4 8 0" stroke={eyeFill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        );
      case 'thinking':
        return (
          <>
            <circle cx="44" cy="60" r="2" fill={eyeFill} />
            <path d="M52 60 q4 -3 8 0" stroke={eyeFill} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </>
        );
      default:
        return (
          <>
            <circle cx="44" cy="60" r="2.4" fill={eyeFill} />
            <circle cx="56" cy="60" r="2.4" fill={eyeFill} />
            <circle cx="44.8" cy="59.2" r="0.7" fill="white" />
            <circle cx="56.8" cy="59.2" r="0.7" fill="white" />
          </>
        );
    }
  })();

  const mouth = (() => {
    switch (mood) {
      case 'celebrating':
        return <path d="M44 68 q6 7 12 0" stroke={eyeFill} strokeWidth="2.2" fill="hsl(var(--cia-red-500))" strokeLinecap="round" />;
      case 'talking':
        return <ellipse cx="50" cy="70" rx="3" ry="2.2" fill={eyeFill} className="anim-flame-talk" />;
      case 'encouraging':
        return <path d="M45 68 q5 4 10 0" stroke={eyeFill} strokeWidth="2.2" fill="none" strokeLinecap="round" />;
      case 'sad':
        return <path d="M45 71 q5 -4 10 0" stroke={eyeFill} strokeWidth="2.2" fill="none" strokeLinecap="round" />;
      case 'thinking':
        return <path d="M45 70 h10" stroke={eyeFill} strokeWidth="2.2" strokeLinecap="round" />;
      default:
        return <path d="M45 68 q5 3.5 10 0" stroke={eyeFill} strokeWidth="2.2" fill="none" strokeLinecap="round" />;
    }
  })();

  return (
    <g>
      {eyes}
      {mouth}
    </g>
  );
}

export const SparkStatic = React.forwardRef<HTMLDivElement, SparkStaticProps>(
  (
    {
      mood = 'idle',
      size = 96,
      halo = true,
      embers = false,
      motionless = false,
      className,
      ...props
    },
    ref,
  ) => {
    const flameAnim = motionless ? '' : moodToFlameAnim[mood];
    const haloAnim = motionless ? '' : 'anim-halo-pulse';

    return (
      <div
        ref={ref}
        className={cn('relative inline-block select-none', className)}
        style={{ width: size, height: size }}
        aria-label={`Spark, état ${mood}`}
        role="img"
        {...props}
      >
        {halo && (
          <div
            className={cn('absolute inset-0 rounded-full bg-g-spark opacity-60 blur-md', haloAnim)}
            aria-hidden="true"
          />
        )}

        {embers && !motionless && (
          <div className="absolute inset-x-0 -top-2 h-full pointer-events-none" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute block rounded-full bg-cia-gold-400 anim-ember"
                style={{
                  left: `${30 + i * 20}%`,
                  bottom: '30%',
                  width: 4,
                  height: 4,
                  animationDelay: `${i * 0.7}s`,
                  filter: 'blur(0.5px)',
                }}
              />
            ))}
          </div>
        )}

        <svg
          viewBox="0 0 100 100"
          className={cn('relative w-full h-full drop-shadow-[0_4px_12px_hsl(var(--cia-blue-500)/0.35)]', flameAnim)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 6 C 62 22, 78 32, 78 56 C 78 76, 66 92, 50 92 C 34 92, 22 76, 22 56 C 22 32, 38 22, 50 6 Z"
            fill="hsl(var(--cia-gold-400))"
            className={motionless ? '' : 'anim-flicker-outer'}
          />
          <path
            d="M50 16 C 60 28, 72 38, 72 58 C 72 74, 62 88, 50 88 C 38 88, 28 74, 28 58 C 28 38, 40 28, 50 16 Z"
            fill="hsl(var(--cia-spark-deep))"
            className={motionless ? '' : 'anim-flicker-mid'}
            style={{ mixBlendMode: 'screen' }}
          />
          <path
            d="M50 26 C 58 34, 66 44, 66 60 C 66 72, 58 84, 50 84 C 42 84, 34 72, 34 60 C 34 44, 42 34, 50 26 Z"
            fill="hsl(var(--cia-spark-mid))"
            className={motionless ? '' : 'anim-flicker-mid2'}
            style={{ mixBlendMode: 'screen' }}
          />
          <ellipse
            cx="50"
            cy="62"
            rx="18"
            ry="22"
            fill="hsl(var(--cia-spark-light))"
            className={motionless ? '' : 'anim-flicker-core'}
          />
          <ellipse cx="50" cy="64" rx="14" ry="18" fill="white" />

          <SparkFace mood={mood} />
        </svg>
      </div>
    );
  },
);
SparkStatic.displayName = 'SparkStatic';
