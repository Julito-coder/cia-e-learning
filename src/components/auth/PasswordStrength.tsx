import { motion } from 'framer-motion';
import { computePasswordScore, passwordStrengthLabels } from '@/lib/validators/auth';

const segmentColors = [
  'bg-muted',
  'bg-destructive',
  'bg-streak-500',
  'bg-cia-gold-500',
  'bg-cia-success',
];

const labelColors = [
  'text-muted-foreground',
  'text-destructive',
  'text-cia-red-600',
  'text-cia-gold-700',
  'text-cia-success',
];

export function PasswordStrength({ value }: { value: string }) {
  if (!value) return null;
  const score = computePasswordScore(value);
  return (
    <div className="mt-2 space-y-1">
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < score ? segmentColors[score] : 'bg-muted'
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2, delay: i * 0.04 }}
            style={{ transformOrigin: 'left' }}
          />
        ))}
      </div>
      <p className={`text-[11px] font-medium ${labelColors[score]}`}>
        {passwordStrengthLabels[score]}
      </p>
    </div>
  );
}