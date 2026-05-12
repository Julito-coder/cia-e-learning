import { ArrowRight, BookOpen, Clock, Sparkles, Lock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { ModuleNodeState } from './ModuleNode';
import type { ModuleIconType } from '@/lib/moduleIcon';

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
}

export function ModuleDrawer(props: ModuleDrawerProps) {
  const { t } = useTranslation();
  const {
    open, onOpenChange, moduleId, index, title, theme, description,
    icon, state, level, totalLessons, durationMinutes, xpReward, progress,
  } = props;

  const ctaLabel =
    state === 'locked'    ? t('curriculum.drawer.locked_cta') :
    state === 'completed' ? t('curriculum.drawer.completed_cta') :
    progress > 0          ? t('curriculum.drawer.continue_cta') :
                            t('curriculum.drawer.start_cta');

  const renderHeroIcon = () => {
    if (state === 'locked') return <Lock className="h-9 w-9 text-muted-foreground" />;
    if (state === 'completed') return <Check className="h-9 w-9 text-green-600" strokeWidth={3} />;
    if (icon.kind === 'emoji') return <span className="text-4xl">{icon.value}</span>;
    const Icon = icon.value;
    return <Icon className="h-9 w-9 text-cia-blue-700" strokeWidth={2.2} />;
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="text-center pb-2">
          <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-cia-blue-100 to-cia-gold-100 flex items-center justify-center mb-3 shadow-md">
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
            <div className="bg-cia-gold-50 rounded-xl p-3 text-center">
              <Sparkles className="h-4 w-4 mx-auto mb-1 text-cia-gold-500" />
              <div className="font-display font-bold text-cia-gold-600 tabular-nums">+{xpReward}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">XP</div>
            </div>
          </div>

          {progress > 0 && progress < 100 && (
            <div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                <span>{t('curriculum.drawer.progress')}</span>
                <span className="tabular-nums font-semibold">{progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cia-blue-500 to-cia-gold-400 transition-all duration-500" style={{ width: `${progress}%` }} />
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
            <Button asChild variant="gradient" size="cta" className="w-full">
              <Link to={`/programme?module=${moduleId}`} onClick={() => onOpenChange(false)} className="gap-2">
                {ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
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
