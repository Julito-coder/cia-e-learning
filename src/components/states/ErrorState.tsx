import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  showHome?: boolean;
  className?: string;
}

export function ErrorState({
  title = 'Une erreur est survenue',
  description = 'Vérifiez votre connexion et réessayez.',
  onRetry,
  showHome = false,
  className,
}: ErrorStateProps) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'flex flex-col items-center justify-center text-center py-14 px-6 rounded-3xl bg-destructive/5 border border-destructive/20',
        className,
      )}
    >
      <div className="h-16 w-16 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center mb-4">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <h3 className="font-display text-lg font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
      <div className="flex flex-wrap gap-2 justify-center mt-5">
        {onRetry && (
          <Button onClick={onRetry} size="sm">
            <RefreshCw className="h-4 w-4 mr-1.5" /> Réessayer
          </Button>
        )}
        {showHome && (
          <Button onClick={() => navigate('/')} size="sm" variant="outline">
            <Home className="h-4 w-4 mr-1.5" /> Accueil
          </Button>
        )}
      </div>
    </motion.div>
  );
}