import { motion } from 'framer-motion';
import { Lock, Check, ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { ModuleIconType } from '@/lib/moduleIcon';

export type ModuleNodeState = 'locked' | 'available' | 'current' | 'completed';

interface ModuleNodeProps {
  index: number;
  title: string;
  icon: ModuleIconType;
  state: ModuleNodeState;
  onClick: () => void;
}

const STATE_STYLES: Record<ModuleNodeState, {
  bgClass: string;
  iconColor: string;
  ring: string;
  scale: number;
  shadow: string;
}> = {
  locked: {
    bgClass:   'bg-muted',
    iconColor: 'text-muted-foreground/50',
    ring:      '',
    scale:     0.92,
    shadow:    'shadow-sm',
  },
  available: {
    bgClass:   'bg-card',
    iconColor: 'text-cia-blue-700',
    ring:      'ring-2 ring-cia-blue-200',
    scale:     1,
    shadow:    'shadow-md',
  },
  current: {
    bgClass:   'bg-gradient-to-br from-cia-gold-300 to-cia-gold-500',
    iconColor: 'text-white',
    ring:      'ring-4 ring-cia-gold-400/40',
    scale:     1.1,
    shadow:    'shadow-[0_6px_0_0] shadow-cia-gold-700/50',
  },
  completed: {
    bgClass:   'bg-gradient-to-br from-green-400 to-green-600',
    iconColor: 'text-white',
    ring:      '',
    scale:     1,
    shadow:    'shadow-[0_4px_0_0] shadow-green-800/40',
  },
};

export function ModuleNode({ index, title, icon, state, onClick }: ModuleNodeProps) {
  const { t } = useTranslation();
  const style = STATE_STYLES[state];
  const disabled = state === 'locked';

  const renderIcon = () => {
    if (icon.kind === 'emoji') {
      return (
        <span
          className="text-3xl"
          style={{ filter: state === 'locked' ? 'grayscale(0.8)' : undefined }}
        >
          {icon.value}
        </span>
      );
    }
    const Icon = icon.value;
    return <Icon className={`h-7 w-7 ${style.iconColor}`} strokeWidth={2.2} />;
  };

  return (
    <div className="relative inline-flex flex-col items-center gap-2">
      {state === 'current' && (
        <motion.span
          className="absolute -inset-3 rounded-full bg-cia-gold-400/30 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      )}

      <motion.button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`
          relative z-10 h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full
          ${style.bgClass} ${style.ring} ${style.shadow}
          flex items-center justify-center
          transition-all duration-200 ease-out-expo
          ${!disabled ? 'cursor-pointer active:translate-y-1 active:shadow-none' : 'cursor-default'}
        `}
        style={{ transform: `scale(${style.scale})` }}
        whileTap={!disabled ? { scale: style.scale * 0.92 } : undefined}
        transition={{ type: 'spring', damping: 15, stiffness: 400 }}
        aria-label={`${t('curriculum.module')} ${index + 1} : ${title} (${t(`curriculum.state.${state}`)})`}
      >
        {state === 'locked' && <Lock className="absolute h-5 w-5 text-muted-foreground" />}
        {state === 'completed' && <Check className="h-9 w-9 text-white" strokeWidth={3.5} />}
        {(state === 'available' || state === 'current') && renderIcon()}
      </motion.button>

      <span
        className={`text-xs font-display font-bold tabular-nums ${
          state === 'locked' ? 'text-muted-foreground/50' : 'text-foreground'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {state === 'current' && (
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative bg-cia-gold-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap">
            {t('curriculum.you_are_here')}
            <ArrowDown className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-3 w-3 text-cia-gold-500 fill-cia-gold-500" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
