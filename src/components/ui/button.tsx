import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold font-display ring-offset-background transition-all duration-200 ease-out-expo active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cia-spark-mid/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:     "bg-primary text-primary-foreground hover:brightness-110 shadow-3d-blue active:translate-y-[2px] active:shadow-3d-blue-active",
        destructive: "bg-cia-red-500 text-white hover:bg-cia-red-600 shadow-3d-red active:translate-y-[2px]",
        outline:     "border-2 border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/40",
        secondary:   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:       "hover:bg-accent hover:text-accent-foreground",
        link:        "text-primary underline-offset-4 hover:underline",
        gold:        "bg-cia-gold-500 text-cia-blue-900 hover:bg-cia-gold-400 shadow-3d-gold active:translate-y-[2px] active:shadow-3d-gold-active",
        gradient:    "bg-g-dawn text-white hover:brightness-110 shadow-3d-blue active:translate-y-[2px] active:shadow-3d-blue-active",
        success:     "bg-success-500 text-white hover:bg-success-600 shadow-3d-success active:translate-y-[2px]",
        spark:       "bg-g-spark text-white hover:brightness-110 shadow-glow-blue active:translate-y-[2px]",
        glass:       "glass-adaptive text-foreground hover:bg-foreground/5 border border-border/50",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm:      "h-9 rounded-lg px-3 text-xs",
        lg:      "h-12 px-8 text-base",
        icon:    "h-11 w-11",
        cta:     "h-14 px-10 text-base rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
