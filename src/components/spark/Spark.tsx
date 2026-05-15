import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Spark — mascotte officielle CIA (flamme méditerranéenne).
 * SVG inline multi-couches : halo + flamme (4 couches qui flickerent indépendamment) + visage.
 * En attendant les SVG/Lottie définitifs, c'est l'asset canonique.
 *
 * Couleurs strictement piochées dans la charte (CIA Blue / Gold / Red / Spark).
 * Couches :
 *   1. halo (cia-spark-light, anim-halo-pulse)
 *   2. outer flame (cia-gold-400, anim-flicker-outer + anim-flame-{mood})
 *   3. mid flame (cia-spark-mid)
 *   4. mid2 flame (cia-spark-light)
 *   5. core (white)
 *   6. visage (yeux + bouche selon mood)
 */

export type SparkMood =
  | "idle"
  | "talking"
  | "celebrating"
  | "encouraging"
  | "sad"
  | "thinking";

export interface SparkProps extends React.HTMLAttributes<HTMLDivElement> {
  mood?: SparkMood;
  /** Taille en px (carré). Default 96. */
  size?: number;
  /** Affiche le halo derrière la flamme. Default true. */
  halo?: boolean;
  /** Affiche les braises qui s'envolent. Default false. */
  embers?: boolean;
  /** Désactive toutes les animations (respect prefers-reduced-motion). */
  static?: boolean;
}

const moodToFlameAnim: Record<SparkMood, string> = {
  idle:        "anim-flame-breathe",
  talking:     "anim-flame-talk",
  celebrating: "anim-flame-celebrate",
  encouraging: "anim-flame-bounce",
  sad:         "anim-flame-sad",
  thinking:    "anim-flame-breathe",
};

function SparkFace({ mood }: { mood: SparkMood }) {
  // Couleur des yeux : bleu profond CIA pour rester lisible sur la flamme blanche.
  const eyeFill = "hsl(var(--cia-blue-900))";

  // Yeux selon mood
  const eyes = (() => {
    switch (mood) {
      case "celebrating":
        return (
          <>
            {/* yeux fermés / ^^ */}
            <path d="M40 58 q4 -5 8 0" stroke={eyeFill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M52 58 q4 -5 8 0" stroke={eyeFill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        );
      case "sad":
        return (
          <>
            <path d="M40 60 q4 4 8 0" stroke={eyeFill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M52 60 q4 4 8 0" stroke={eyeFill} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        );
      case "thinking":
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
            {/* reflet */}
            <circle cx="44.8" cy="59.2" r="0.7" fill="white" />
            <circle cx="56.8" cy="59.2" r="0.7" fill="white" />
          </>
        );
    }
  })();

  // Bouche
  const mouth = (() => {
    switch (mood) {
      case "celebrating":
        return <path d="M44 68 q6 7 12 0" stroke={eyeFill} strokeWidth="2.2" fill="hsl(var(--cia-red-500))" strokeLinecap="round" />;
      case "talking":
        return <ellipse cx="50" cy="70" rx="3" ry="2.2" fill={eyeFill} className="anim-flame-talk" />;
      case "encouraging":
        return <path d="M45 68 q5 4 10 0" stroke={eyeFill} strokeWidth="2.2" fill="none" strokeLinecap="round" />;
      case "sad":
        return <path d="M45 71 q5 -4 10 0" stroke={eyeFill} strokeWidth="2.2" fill="none" strokeLinecap="round" />;
      case "thinking":
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

export const Spark = React.forwardRef<HTMLDivElement, SparkProps>(
  (
    {
      mood = "idle",
      size = 96,
      halo = true,
      embers = false,
      static: isStatic = false,
      className,
      ...props
    },
    ref,
  ) => {
    const reduced =
      isStatic ||
      (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const flameAnim = reduced ? "" : moodToFlameAnim[mood];
    const haloAnim = reduced ? "" : "anim-halo-pulse";

    return (
      <div
        ref={ref}
        className={cn("relative inline-block select-none", className)}
        style={{ width: size, height: size }}
        aria-label={`Spark, état ${mood}`}
        role="img"
        {...props}
      >
        {/* Halo */}
        {halo && (
          <div
            className={cn("absolute inset-0 rounded-full bg-g-spark opacity-60 blur-md", haloAnim)}
            aria-hidden="true"
          />
        )}

        {/* Embers */}
        {embers && !reduced && (
          <div className="absolute inset-x-0 -top-2 h-full pointer-events-none" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute block rounded-full bg-cia-gold-400 anim-ember"
                style={{
                  left: `${30 + i * 20}%`,
                  bottom: "30%",
                  width: 4,
                  height: 4,
                  animationDelay: `${i * 0.7}s`,
                  filter: "blur(0.5px)",
                }}
              />
            ))}
          </div>
        )}

        {/* Flamme */}
        <svg
          viewBox="0 0 100 100"
          className={cn("relative w-full h-full drop-shadow-[0_4px_12px_hsl(var(--cia-blue-500)/0.35)]", flameAnim)}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer flame — gold */}
          <path
            d="M50 6 C 62 22, 78 32, 78 56 C 78 76, 66 92, 50 92 C 34 92, 22 76, 22 56 C 22 32, 38 22, 50 6 Z"
            fill="hsl(var(--cia-gold-400))"
            className={reduced ? "" : "anim-flicker-outer"}
          />
          {/* Mid flame — spark deep blue */}
          <path
            d="M50 16 C 60 28, 72 38, 72 58 C 72 74, 62 88, 50 88 C 38 88, 28 74, 28 58 C 28 38, 40 28, 50 16 Z"
            fill="hsl(var(--cia-spark-deep))"
            className={reduced ? "" : "anim-flicker-mid"}
            style={{ mixBlendMode: "screen" }}
          />
          {/* Mid2 flame — spark mid */}
          <path
            d="M50 26 C 58 34, 66 44, 66 60 C 66 72, 58 84, 50 84 C 42 84, 34 72, 34 60 C 34 44, 42 34, 50 26 Z"
            fill="hsl(var(--cia-spark-mid))"
            className={reduced ? "" : "anim-flicker-mid2"}
            style={{ mixBlendMode: "screen" }}
          />
          {/* Core — white spark */}
          <ellipse
            cx="50"
            cy="62"
            rx="18"
            ry="22"
            fill="hsl(var(--cia-spark-light))"
            className={reduced ? "" : "anim-flicker-core"}
          />
          <ellipse cx="50" cy="64" rx="14" ry="18" fill="white" />

          {/* Visage */}
          <SparkFace mood={mood} />
        </svg>
      </div>
    );
  },
);
Spark.displayName = "Spark";

export default Spark;