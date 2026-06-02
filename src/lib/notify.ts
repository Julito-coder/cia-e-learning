import { toast as sonnerToast, type ExternalToast } from 'sonner';

const DURATIONS = {
  success: 3000,
  error: 5000,
  info: 3500,
  warning: 4500,
  gamification: 5000,
};

type Opts = ExternalToast;

export const notify = {
  success: (title: string, opts?: Opts) =>
    sonnerToast.success(title, { duration: DURATIONS.success, ...opts }),

  error: (title: string, opts?: Opts) =>
    sonnerToast.error(title, { duration: DURATIONS.error, ...opts }),

  info: (title: string, opts?: Opts) =>
    sonnerToast.info(title, { duration: DURATIONS.info, ...opts }),

  warning: (title: string, opts?: Opts) =>
    sonnerToast.warning(title, { duration: DURATIONS.warning, ...opts }),

  message: (title: string, opts?: Opts) => sonnerToast(title, opts),

  loading: (title: string, opts?: Opts) => sonnerToast.loading(title, opts),

  dismiss: (id?: string | number) => sonnerToast.dismiss(id),

  promise: sonnerToast.promise,

  // ----- Gamification -----
  xp: (amount: number, source?: string) =>
    sonnerToast.success(`+${amount} tokens`, {
      description: source,
      duration: DURATIONS.gamification,
      icon: '⚡',
    }),

  streak: (days: number, xp?: number) =>
    sonnerToast.success(
      `Défi du jour validé !`,
      {
        description: `Série : ${days} jour${days > 1 ? 's' : ''}${xp ? ` · +${xp} tokens` : ''}`,
        duration: DURATIONS.gamification,
        icon: '🔥',
      },
    ),

  badge: (label: string, emoji?: string) =>
    sonnerToast.success(`Badge obtenu`, {
      description: `${emoji ? emoji + ' ' : ''}${label}`,
      duration: DURATIONS.gamification,
      icon: '🏅',
    }),

  levelUp: (newLevel: string) =>
    sonnerToast.success(`Niveau supérieur !`, {
      description: `Vous êtes maintenant ${newLevel}`,
      duration: DURATIONS.gamification,
      icon: '🎉',
    }),

  unlock: (label: string, emoji?: string) =>
    sonnerToast(`Module débloqué`, {
      description: `${emoji ? emoji + ' ' : ''}${label}`,
      duration: DURATIONS.gamification,
      icon: '🔓',
    }),
};

// re-export for convenience
export { sonnerToast as toast };