import * as React from 'react';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { SparkStatic, type SparkMood, type SparkStaticProps } from './SparkStatic';

export type { SparkMood } from './SparkStatic';

export interface SparkProps extends Omit<SparkStaticProps, 'motionless'> {
  /** Loop the Lottie animation. Default true for idle/talking/encouraging/sad,
   *  false for celebrating (one-shot, freezes on the last frame). */
  loop?: boolean;
  /** Force the SVG static renderer instead of Lottie. Default false. */
  static?: boolean;
}

// Mood → dynamic loader for the matching Lottie JSON (Vite bundles each
// into its own chunk so they load on demand).
type LottieAnimationData = Record<string, unknown>;
const lottieLoaders: Partial<Record<SparkMood, () => Promise<{ default: LottieAnimationData }>>> = {
  idle: () => import('@/assets/lottie/spark/spark-idle.json'),
  talking: () => import('@/assets/lottie/spark/spark-talking.json'),
  encouraging: () => import('@/assets/lottie/spark/spark-encouraging.json'),
  celebrating: () => import('@/assets/lottie/spark/spark-celebrating.json'),
  sad: () => import('@/assets/lottie/spark/spark-sad.json'),
  // `thinking` has no Lottie, falls back to SparkStatic.
};

const animationCache = new Map<SparkMood, LottieAnimationData>();

function defaultLoopForMood(mood: SparkMood): boolean {
  return mood !== 'celebrating';
}

export const Spark = React.forwardRef<HTMLDivElement, SparkProps>(
  (
    {
      mood = 'idle',
      size = 96,
      halo = true,
      embers = false,
      loop,
      static: forceStatic = false,
      className,
      ...props
    },
    ref,
  ) => {
    const reducedMotion = usePrefersReducedMotion();
    const loader = lottieLoaders[mood];
    const cached = animationCache.get(mood);
    const [animationData, setAnimationData] = React.useState<LottieAnimationData | null>(
      cached ?? null,
    );
    const [loadError, setLoadError] = React.useState(false);
    const lottieRef = React.useRef<LottieRefCurrentProps | null>(null);

    React.useEffect(() => {
      if (forceStatic || reducedMotion || !loader) return;
      if (animationCache.has(mood)) {
        setAnimationData(animationCache.get(mood) ?? null);
        return;
      }
      let cancelled = false;
      loader()
        .then((mod) => {
          if (cancelled) return;
          animationCache.set(mood, mod.default);
          setAnimationData(mod.default);
        })
        .catch(() => {
          if (cancelled) return;
          setLoadError(true);
        });
      return () => {
        cancelled = true;
      };
    }, [mood, loader, forceStatic, reducedMotion]);

    const shouldUseStatic = forceStatic || reducedMotion || loadError || !loader || !animationData;

    if (shouldUseStatic) {
      return (
        <SparkStatic
          ref={ref}
          mood={mood}
          size={size}
          halo={halo}
          embers={embers}
          motionless={forceStatic || reducedMotion}
          className={className}
          {...props}
        />
      );
    }

    const willLoop = loop ?? defaultLoopForMood(mood);

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
            className="absolute inset-0 rounded-full bg-g-spark opacity-60 blur-md anim-halo-pulse"
            aria-hidden="true"
          />
        )}

        {embers && (
          <div className="absolute inset-x-0 -top-2 h-full pointer-events-none" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute block rounded-full bg-cia-spark-ember anim-ember"
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

        <div
          className="relative w-full h-full drop-shadow-[0_4px_12px_hsl(var(--cia-blue-500)/0.35)]"
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={willLoop}
            autoplay
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    );
  },
);
Spark.displayName = 'Spark';

export default Spark;
