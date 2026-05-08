import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        xp: "bg-xp/10 text-xp border-xp/20 font-semibold",
        streak: "bg-streak/10 text-streak border-streak/20 font-semibold gap-1",
        level: "bg-cia-blue-50 text-cia-blue-700 border-cia-blue-200 font-semibold tracking-wide",
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
