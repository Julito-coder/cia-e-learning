import { ArrowRight, BookOpen, Clock, Sparkles, Lock, Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { ModuleNodeState } from './ModuleNode';
import type { ModuleIconType } from '@/lib/moduleIcon';
import { getEntryLessonForModule } from '@/data/contentRegistry';
import { readCourseProgressMap } from '@/lib/courseProgress';

interface ModuleDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  moduleId: string;
  index: number;
  title: string;
  theme?: string;
  description?: string;
  icon: ModuleIconType;
  state: ModuleNodeState;
  level: string;
  totalLessons: number;
  durationMinutes: number;
  xpReward: number;
  progress: number;
  /** Optionnel — affiche un bouton « Simuler la complétion (démo) »
   *  pour déclencher la séquence récompense depuis le Parcours. */
  onSimulateComplete?: () => void;
}

export function ModuleDrawer(props: ModuleDrawerProps) {
  const { t } = useTranslation();
  const {
    open, onOpenChange, moduleId, index, title, theme, description,
    icon, state, level, totalLessons, durationMinutes, xpReward, progress,
    onSimulateComplete,
  } = props;

  const ctaLabel =
    state === 'locked'    ? t('curriculum.drawer.locked_cta') :
    state === 'completed' ? t('curriculum.drawer.completed_cta') :
    progress > 0          ? t('curriculum.drawer.continue_cta') :
                            t('curriculum.drawer.start_cta');

  // Resolve the canonical lesson route via the content registry. Same rule
  // as the Catalogue : send the user to the first not-yet-completed lesson
  // of the module — never to `/cours/${moduleId}`, which lands on
  // "Cours introuvable" because moduleId is not a content key.
  const progressMap = readCourseProgressMap();
  const completedIds = new Set(
    Object.entries(progressMap)
      .filter(([, p]) => p?.completed)
      .map(([id]) => id),
  );
  const entryLesson = getEntryLessonForModule(moduleId, completedIds);
  const ctaHref = entryLesson ? `/cours/${entryLesson.lessonId}` : `/cours/${moduleId}`;

  const renderHeroIcon = () => {
    if (state === 'locked') return <Lock className="h-9 w-9 text-ink-400" />;
    if (state === 'completed') return <Check className="h-9 w-9 text-success-600" strokeWidth={3} />;
    const Icon = icon;
    return <Icon className="h-9 w-9 text-cia-blue-700" strokeWidth={2.2} />;
  };

  const isOpenable = state === 'available' || state === 'current';

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="text-center pb-2">
          {/* Hero icon : fond bleu pur charte v2 (gradient or → bleu interdit) */}
          <div className="mx-auto h-20 w-20 rounded-2xl bg-cia-blue-50 dark:bg-cia-blue-900/40 flex items-center justify-center mb-3 shadow-md">
            {renderHeroIcon()}
          </div>

          <div className="flex items-center justify-center gap-2 mb-1">
            <Badge variant="level">{level}</Badge>
            <span className="text-xs text-muted-foreground tabular-nums">
              {t('curriculum.module')} {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <DrawerTitle className="font-display text-2xl text-center">{title}</DrawerTitle>

          {theme && (
            <DrawerDescription className="text-center text-base mt-1">
              {theme}
            </DrawerDescription>
          )}
        </DrawerHeader>

        <div className="px-6 py-4 space-y-4">
          {description && (
            <p className="text-sm text-foreground/85 leading-relaxed">{description}</p>
          )}

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-muted/40 rounded-xl p-3 text-center">
              <BookOpen className="h-4 w-4 mx-auto mb-1 text-cia-blue-500" />
              <div className="font-display font-bold tabular-nums">{totalLessons}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t('curriculum.drawer.lessons')}</div>
            </div>
            <div className="bg-muted/40 rounded-xl p-3 text-center">
              <Clock className="h-4 w-4 mx-auto mb-1 text-cia-blue-500" />
              <div className="font-display font-bold tabular-nums">{durationMinutes}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t('curriculum.drawer.minutes')}</div>
            </div>
            {/* Carte XP : fond bleu charte + dot micro-gradient `g-sun` charte v2 §3
                (or autorisé uniquement via micro-gradient, pas en aplat). */}
            <div className="bg-cia-blue-50 dark:bg-cia-blue-900/40 rounded-xl p-3 text-center relative">
              <div className="h-4 w-4 mx-auto mb-1 rounded-full bg-g-sun flex items-center justify-center shadow-sm">
                <Sparkles className="h-2.5 w-2.5 text-white" />
              </div>
              <div className="font-display font-bold text-cia-blue-700 dark:text-cia-blue-300 tabular-nums">+{xpReward}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">XP</div>
            </div>
          </div>

          {progress > 0 && progress < 100 && (
            <div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                <span>{t('curriculum.drawer.progress')}</span>
                <span className="tabular-nums font-semibold">{progress}%</span>
              </div>
              {/* Progress bar : bleu CIA plein (gradient or → bleu interdit) */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-cia-blue-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <DrawerFooter className="pt-2">
          {state === 'locked' ? (
            <Button variant="outline" disabled className="w-full">
              <Lock className="h-4 w-4 mr-2" /> {ctaLabel}
            </Button>
          ) : (
            /* CTA primaire : bleu 3D charte (variant default), pas de gradient or */
            <Button asChild size="cta" className="w-full">
              <Link
                to={ctaHref}
                onClick={() => onOpenChange(false)}
                className="gap-2"
              >
                {ctaLabel} <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
              </Link>
            </Button>
          )}

          {/* Démo : bouton « Simuler la complétion » pour déclencher la séquence
              récompense (XPBurst + path fill + Spark celebrating). Présent
              uniquement quand `onSimulateComplete` est fourni. */}
          {isOpenable && onSimulateComplete && (
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2 text-cia-spark-mid border-cia-spark-mid/40 hover:bg-cia-blue-50/40"
              onClick={() => {
                onSimulateComplete();
                onOpenChange(false);
              }}
            >
              <Zap className="h-4 w-4" />
              {t('curriculum.drawer.simulate_complete')}
            </Button>
          )}

          <DrawerClose asChild>
            <Button variant="ghost" size="sm">{t('curriculum.drawer.close')}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
