import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spark, type SparkMood } from "./Spark";
import { cn } from "@/lib/utils";

export interface SparkPresenceProps {
  mood?: SparkMood;
  size?: number;
  /** Message à afficher en bulle (si défini). */
  message?: string;
  /** Position de la bulle. */
  bubbleSide?: "right" | "left" | "top" | "bottom";
  halo?: boolean;
  embers?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * SparkPresence — Spark + bulle de dialogue.
 * Drop-in replacement de MascotPresence pour la nouvelle identité.
 */
export function SparkPresence({
  mood = "idle",
  size = 96,
  message,
  bubbleSide = "right",
  halo = true,
  embers = false,
  onClick,
  className,
}: SparkPresenceProps) {
  const [internalMood, setInternalMood] = React.useState<SparkMood>(mood);

  React.useEffect(() => {
    setInternalMood(mood);
    if (mood === "encouraging" || mood === "sad" || mood === "celebrating") {
      const t = setTimeout(() => setInternalMood("idle"), 1800);
      return () => clearTimeout(t);
    }
  }, [mood]);

  const layoutClass =
    bubbleSide === "right"  ? "flex-row items-center gap-3" :
    bubbleSide === "left"   ? "flex-row-reverse items-center gap-3" :
    bubbleSide === "bottom" ? "flex-col items-center gap-2" :
                              "flex-col-reverse items-center gap-2";

  const arrowPos =
    bubbleSide === "right"  ? "-left-[7px] top-1/2 -translate-y-1/2 border-l-2 border-b-2 rotate-45" :
    bubbleSide === "left"   ? "-right-[7px] top-1/2 -translate-y-1/2 border-r-2 border-t-2 rotate-45" :
    bubbleSide === "bottom" ? "-top-[7px] left-1/2 -translate-x-1/2 border-l-2 border-t-2 rotate-45" :
                              "-bottom-[7px] left-1/2 -translate-x-1/2 border-r-2 border-b-2 rotate-45";

  return (
    <div className={cn("inline-flex", layoutClass, className)}>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "rounded-full p-1 transition-transform duration-200 ease-out-expo",
          onClick && "hover:scale-105 active:scale-95 cursor-pointer",
          !onClick && "cursor-default",
        )}
        aria-label="Spark, mascotte CIA"
      >
        <Spark mood={internalMood} size={size} halo={halo} embers={embers} />
      </button>

      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{
              opacity: 0,
              scale: 0.92,
              x: bubbleSide === "right" ? -8 : bubbleSide === "left" ? 8 : 0,
              y: bubbleSide === "top" ? 4 : bubbleSide === "bottom" ? -4 : 0,
            }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.18 } }}
            transition={{ type: "spring", damping: 18, stiffness: 280 }}
            className="relative max-w-[220px] bg-card text-card-foreground border-2 border-cia-spark-mid/30 rounded-2xl px-3.5 py-2 text-sm font-medium shadow-md"
          >
            <span
              className={cn(
                "absolute w-3 h-3 bg-card border-cia-spark-mid/30",
                arrowPos,
              )}
              aria-hidden="true"
            />
            <span className="relative z-10">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SparkPresence;