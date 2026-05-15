import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-display transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        xp:      "bg-xp/10 text-xp border-xp/20",
        streak:  "bg-streak/10 text-streak border-streak/20 gap-1",
        gems:    "bg-gems/10 text-gems border-gems/20",
        bonus:   "bg-bonus/10 text-bonus border-bonus/20",
        level:   "bg-cia-blue-50 text-cia-blue-700 border-cia-blue-200 tracking-wide dark:bg-cia-blue-900/40 dark:text-cia-blue-200 dark:border-cia-blue-700",
        spark:   "bg-cia-spark-light/15 text-cia-spark-deep border-cia-spark-mid/30 dark:text-cia-spark-light",
        success: "bg-success-500/10 text-success-700 border-success-500/20 dark:text-success-500",
        warning: "bg-warning-500/10 text-warning-700 border-warning-500/20 dark:text-warning-500",
        info:    "bg-info-500/10 text-info-700 border-info-500/20 dark:text-info-500",
        gold:    "bg-cia-gold-100 text-cia-gold-700 border-cia-gold-300 dark:bg-cia-gold-900/40 dark:text-cia-gold-300 dark:border-cia-gold-700",
        "league-bronze": "bg-league-bronze/15 text-league-bronze border-league-bronze/30",
        "league-silver": "bg-league-silver/20 text-league-silver border-league-silver/40",
        "league-gold": "bg-league-gold/15 text-cia-gold-600 border-cia-gold-300 shadow-glow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
