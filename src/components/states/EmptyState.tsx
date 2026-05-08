import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon?: LucideIcon;
  illustration?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  className?: string;
}

export function EmptyState({
  icon: Icon,
  illustration,
  title,
  description,
  action,
  secondaryAction,
  className,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={cn(
        'flex flex-col items-center justify-center text-center py-14 px-6 rounded-3xl bg-muted/30 border border-border/50',
        className,
      )}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 18 }}
        className="mb-4"
      >
        {illustration ?? (
          Icon && (
            <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Icon className="h-8 w-8" />
            </div>
          )
        )}
      </motion.div>
      <h3 className="font-display text-lg font-bold text-foreground mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
      )}
      {(action || secondaryAction) && (
        <div className="flex flex-wrap gap-2 justify-center mt-5">
          {action && (
            <Button onClick={action.onClick} size="sm">
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button onClick={secondaryAction.onClick} size="sm" variant="outline">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}