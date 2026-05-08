import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface StreakMilestoneProps {
  streak: number;
  open: boolean;
  onClose: () => void;
}

const MILESTONES: Record<number, { titleKey: string; descKey: string }> = {
  7:   { titleKey: 'streak.m7.title',   descKey: 'streak.m7.desc' },
  14:  { titleKey: 'streak.m14.title',  descKey: 'streak.m14.desc' },
  30:  { titleKey: 'streak.m30.title',  descKey: 'streak.m30.desc' },
  100: { titleKey: 'streak.m100.title', descKey: 'streak.m100.desc' },
};

export function StreakMilestone({ streak, open, onClose }: StreakMilestoneProps) {
  const { t } = useTranslation();
  const meta = MILESTONES[streak];
  if (!meta) return null;
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-md overflow-hidden border-0 bg-gradient-to-br from-orange-600 via-red-500 to-orange-700 text-white p-0">
        <div className="relative px-8 py-10 text-center space-y-4">
          <motion.div
            animate={reduced ? {} : { rotate: [0, -8, 8, -6, 6, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto h-24 w-24 rounded-full bg-white/15 backdrop-blur flex items-center justify-center shadow-2xl"
          >
            <Flame className="h-14 w-14 text-yellow-200" fill="currentColor" />
          </motion.div>

          <motion.p
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-7xl font-display font-extrabold"
          >
            {streak}
          </motion.p>

          <p className="uppercase tracking-widest text-xs font-semibold text-yellow-100/90">
            {t('streak.days_in_a_row')}
          </p>

          <p className="text-2xl font-display font-bold">{t(meta.titleKey)}</p>
          <p className="text-sm text-white/85 max-w-sm mx-auto">{t(meta.descKey)}</p>

          <Button variant="gold" size="cta" onClick={onClose} className="mt-2">
            {t('streak.continue')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}