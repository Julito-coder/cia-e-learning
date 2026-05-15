import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Chip — élément compact pour filtres, tags, sélections.
 * Distinct du Badge (qui est plutôt un statut/étiquette).
 * Touch target 32px (sm) / 36px (md) / 44px (lg).
 */
const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-display font-medium transition-all duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:  "bg-muted text-foreground hover:bg-muted/70 border border-transparent",
        outline:  "border-2 border-border bg-transparent text-foreground hover:border-primary/40 hover:bg-accent/50",
        primary:  "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15",
        gold:     "bg-cia-gold-100 text-cia-gold-700 border border-cia-gold-300 hover:bg-cia-gold-200 dark:bg-cia-gold-900/40 dark:text-cia-gold-300 dark:border-cia-gold-700",
        spark:    "bg-cia-spark-light/15 text-cia-spark-deep border border-cia-spark-mid/30 hover:bg-cia-spark-light/25 dark:text-cia-spark-light",
        success:  "bg-success-500/10 text-success-700 border border-success-500/20 dark:text-success-500",
        glass:    "glass-adaptive text-foreground border border-border/50 hover:bg-foreground/5",
      },
      size: {
        sm: "h-7 px-2.5 text-xs [&_svg]:size-3",
        md: "h-9 px-3.5 text-sm [&_svg]:size-3.5",
        lg: "h-11 px-5 text-base [&_svg]:size-4 min-h-touch",
      },
      active: {
        true: "ring-2 ring-ring ring-offset-1",
        false: "",
      },
    },
    defaultVariants: { variant: "default", size: "md", active: false },
  },
);

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  onRemove?: () => void;
  asSpan?: boolean;
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant, size, active, onRemove, asSpan, children, ...props }, ref) => {
    const content = (
      <>
        {children}
        {onRemove && (
          <span
            role="button"
            tabIndex={-1}
            aria-label="Retirer"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-0.5 -mr-1 inline-flex items-center justify-center rounded-full p-0.5 hover:bg-foreground/10"
          >
            <X />
          </span>
        )}
      </>
    );

    if (asSpan) {
      return (
        <span
          className={cn(chipVariants({ variant, size, active }), className)}
          {...(props as unknown as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {content}
        </span>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cn(chipVariants({ variant, size, active }), className)}
        {...props}
      >
        {content}
      </button>
    );
  },
);
Chip.displayName = "Chip";

export { Chip, chipVariants };