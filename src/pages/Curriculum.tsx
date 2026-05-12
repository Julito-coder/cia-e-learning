import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { staggerContainer, staggerItem, slideUp, useTilt3D } from '@/lib/animations';
import { curriculum } from '@/data/curriculum';
import { useUserProgress } from '@/hooks/useUserProgress';
import type { CECRLevel } from '@/data/demo-courses';

const LEVELS: CECRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const LEVEL_GRADIENTS: Record<string, string> = {
  A1: 'from-cia-blue-50 to-cia-blue-100',
  A2: 'from-cia-blue-100 to-cia-gold-50',
  B1: 'from-cia-gold-50 to-cia-gold-100',
  B2: 'from-cia-gold-100 to-cia-blue-100',
  C1: 'from-cia-blue-100 to-cia-blue-200',
  C2: 'from-cia-blue-200 to-cia-blue-300',
};

interface ModuleCardProps {
  mod: { id: string; number?: number; title?: string; theme?: string; isLocked: boolean; progress: number };
  index: number;
  t: (key: string) => string;
}

function ModuleCard({ mod, index, t }: ModuleCardProps) {
  const tilt = useTilt3D({ max: 8, scale: 1.02, perspective: 1100, active: !mod.isLocked });
  const inner = (
    <div {...tilt.bind} style={tilt.style} className="h-full">
      <Card className={`h-full p-3 flex flex-col gap-1.5 ${mod.isLocked ? 'opacity-60' : 'hover:shadow-md hover:-translate-y-0.5'} transition-all`}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-muted-foreground tracking-wider">
            {String(mod.number ?? index + 1).padStart(2, '0')}
          </span>
          {mod.isLocked ? (
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          ) : mod.progress === 100 ? (
            <CheckCircle2 className="h-3.5 w-3.5 text-cia-success" />
          ) : mod.progress > 0 ? (
            <span className="text-[10px] font-bold text-accent">{mod.progress}%</span>
          ) : null}
        </div>
        <h3 className="font-display text-sm font-extrabold leading-tight line-clamp-2">
          {mod.title ?? `${t('curriculum.module')} ${mod.number}`}
        </h3>
        {mod.theme && (
          <p className="text-[10px] text-muted-foreground line-clamp-2">{mod.theme}</p>
        )}
        {!mod.isLocked && mod.progress > 0 && mod.progress < 100 && (
          <div className="mt-auto pt-1">
            <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: `${mod.progress}%` }} />
            </div>
          </div>
        )}
      </Card>
    </div>
  );
  return mod.isLocked ? inner : <Link to={`/programme?module=${mod.id}`}>{inner}</Link>;
}

export default function Curriculum() {
  const { t } = useTranslation();
  const { cecrLevel } = useUserProgress();

  const sections = useMemo(() => {
    const userIdx = LEVELS.indexOf(cecrLevel as CECRLevel);
    return LEVELS.map((level, lIdx) => {
      const data = curriculum.find((c) => c.level === level);
      const modules = (data?.modules ?? []).map((m, idx) => ({
        ...m,
        isLocked: lIdx > userIdx + 1,
        progress: 0,
      }));
      return { level, title: data?.title ?? '', objective: data?.objective ?? '', modules };
    });
  }, [cecrLevel]);

  return (
    <motion.div initial="hidden" animate="visible" variants={slideUp} className="container py-8 pb-24 md:pb-8 max-w-5xl">
      <header className="mb-8 text-center">
        <h1 className="font-display text-3xl mb-1">{t('curriculum.title')}</h1>
        <p className="text-muted-foreground font-semibold">
          {t('curriculum.subtitle')} <span className="text-accent font-bold">{cecrLevel}</span>
        </p>
      </header>

      <div className="space-y-10">
        {sections.map((section, sIdx) => {
          const isCurrent = section.level === cecrLevel;
          return (
            <motion.section
              key={section.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: sIdx * 0.05 }}
            >
              <div className={`relative rounded-2xl border-2 bg-gradient-to-r ${LEVEL_GRADIENTS[section.level]} p-5 mb-4`}>
                {isCurrent && (
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-3 right-4"
                  >
                    <Badge className="bg-cia-gold-500 text-white border-transparent gap-1 shadow-glow">
                      <Star className="h-3 w-3" /> {t('curriculum.your_level')}
                    </Badge>
                  </motion.div>
                )}
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-white/70 grid place-items-center font-display text-2xl font-extrabold text-cia-blue-700">
                    {section.level}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl">{section.title || t(`landing.cecr.${section.level.toLowerCase()}_label`)}</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {section.objective || t(`landing.cecr.${section.level.toLowerCase()}_desc`)}
                    </p>
                  </div>
                </div>
              </div>

              {section.modules.length === 0 ? (
                <div className="text-center py-8 text-sm text-muted-foreground italic border-2 border-dashed rounded-xl">
                  {t('curriculum.coming_soon')}
                </div>
              ) : (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
                >
                  {section.modules.map((mod, mIdx) => (
                    <motion.div key={mod.id} variants={staggerItem}>
                      <ModuleCard mod={mod} index={mIdx} t={t} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.section>
          );
        })}
      </div>
    </motion.div>
  );
}
