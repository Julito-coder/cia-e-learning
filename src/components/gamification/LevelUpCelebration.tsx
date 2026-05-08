import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Crown } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface LevelUpCelebrationProps {
  level: string;
  open: boolean;
  onClose: () => void;
}

const CONFETTI_COLORS = [
  'hsl(var(--cia-gold-400))',
  'hsl(var(--cia-blue-400))',
  'hsl(var(--cia-red-500))',
  'hsl(var(--cia-gold-500))',
];

const LEVEL_DESCRIPTIONS: Record<string, { titleKey: string; descKey: string }> = {
  A2: { titleKey: 'levelup.a2.title', descKey: 'levelup.a2.desc' },
  B1: { titleKey: 'levelup.b1.title', descKey: 'levelup.b1.desc' },
  B2: { titleKey: 'levelup.b2.title', descKey: 'levelup.b2.desc' },
  C1: { titleKey: 'levelup.c1.title', descKey: 'levelup.c1.desc' },
  C2: { titleKey: 'levelup.c2.title', descKey: 'levelup.c2.desc' },
};

export function LevelUpCelebration({ level, open, onClose }: LevelUpCelebrationProps) {
  const { t } = useTranslation();
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const meta = LEVEL_DESCRIPTIONS[level] ?? { titleKey: 'levelup.generic.title', descKey: 'levelup.generic.desc' };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg overflow-hidden border-0 bg-gradient-to-br from-cia-blue-900 via-cia-blue-700 to-cia-blue-900 text-white p-0">
        {!reduced && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => {
              const left = Math.random() * 100;
              const delay = Math.random() * 0.6;
              const duration = 2 + Math.random() * 1.5;
              const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
              const rotation = Math.random() * 360;
              return (
                <motion.span
                  key={i}
                  className="absolute top-[-20px] block w-2 h-3 rounded-sm"
                  style={{ left: `${left}%`, backgroundColor: color }}
                  initial={{ y: -20, rotate: 0, opacity: 1 }}
                  animate={{ y: 600, rotate: rotation + 720, opacity: [1, 1, 0] }}
                  transition={{ duration, delay, ease: 'linear', repeat: Infinity }}
                />
              );
            })}
          </div>
        )}

        <div className="relative z-10 px-8 py-10 text-center space-y-4">
          <div className="absolute inset-0 -z-10 bg-gradient-radial from-cia-gold-500/30 via-transparent to-transparent blur-2xl" />

          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-cia-gold-400 to-cia-gold-600 flex items-center justify-center shadow-2xl"
          >
            <Crown className="h-10 w-10 text-white" />
          </motion.div>

          <p className="uppercase tracking-widest text-xs font-semibold text-cia-gold-300">
            {t('levelup.banner')}
          </p>

          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-7xl font-display font-extrabold bg-gradient-to-br from-cia-gold-300 to-cia-gold-500 bg-clip-text text-transparent"
          >
            {level}
          </motion.h2>

          <p className="text-xl font-display font-semibold">{t(meta.titleKey)}</p>
          <p className="text-sm text-white/80 max-w-sm mx-auto">{t(meta.descKey)}</p>

          <Button variant="gold" size="cta" onClick={onClose} className="mt-2">
            {t('levelup.continue')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}