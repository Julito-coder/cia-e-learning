import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "border bg-card text-card-foreground transition-all duration-300 ease-out-expo",
  {
    variants: {
      variant: {
        default:  "rounded-3xl shadow-sm",
        elevated: "rounded-3xl shadow-elev-lg border-transparent",
        glass:    "rounded-3xl glass-adaptive border-border/50",
        gradient: "rounded-3xl bg-g-mistral border-border/40 shadow-md",
        flat:     "rounded-2xl shadow-none",
      },
      tone: {
        none: "",
        gold: "ring-1 ring-cia-gold-300/40",
        blue: "ring-1 ring-cia-blue-200/40 dark:ring-cia-blue-700/40",
      },
    },
    defaultVariants: { variant: "default", tone: "none" },
  },
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, interactive, variant, tone, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      cardVariants({ variant, tone }),
      interactive && "hover:shadow-elev-lg hover:-translate-y-1 hover:scale-[1.005] cursor-pointer",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
