import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export interface StepFeedbackProps {
  status: 'idle' | 'correct' | 'incorrect';
  message?: string;
  hint?: string;
}

export function StepFeedback({ status, message, hint }: StepFeedbackProps) {
  const { t } = useTranslation();
  const isCorrect = status === 'correct';

  return (
    <AnimatePresence>
      {status !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'flex items-start gap-3 p-4 rounded-xl border-2',
            isCorrect
              ? 'bg-success/10 border-success/40 text-success'
              : 'bg-destructive/10 border-destructive/40 text-destructive',
          )}
        >
          {isCorrect ? (
            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-5 w-5 shrink-0 mt-0.5" />
          )}
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-sm">
              {message ?? (isCorrect ? t('player.feedback.correct') : t('player.feedback.incorrect'))}
            </p>
            {hint && <p className="text-xs text-foreground/80 mt-1">{hint}</p>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}