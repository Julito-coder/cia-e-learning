import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { slideUp } from '@/lib/animations';
import { curriculum } from '@/data/curriculum';
import { useUserProgress } from '@/hooks/useUserProgress';
import { ModuleNode, type ModuleNodeState } from '@/components/courses/ModuleNode';
import { ZigzagPath } from '@/components/courses/ZigzagPath';
import { ModuleDrawer } from '@/components/courses/ModuleDrawer';
import { MascotPresence } from '@/components/characters/MascotPresence';
import { getModuleIcon } from '@/lib/moduleIcon';
import type { CECRLevel } from '@/data/demo-courses';

const LEVELS: CECRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const LEVEL_HEADER_GRADIENTS: Record<string, string> = {
  A1: 'from-cia-blue-50 to-cia-blue-100',
  A2: 'from-cia-blue-100 to-cia-gold-50',
  B1: 'from-cia-gold-50 to-cia-gold-100',
  B2: 'from-cia-gold-100 to-cia-blue-100',
  C1: 'from-cia-blue-100 to-cia-blue-200',
  C2: 'from-cia-blue-200 to-cia-red-100',
};

interface ModuleWithMeta {
  id: string;
  number: number;
  title: string;
  theme?: string;
  totalLessons: number;
  durationMinutes: number;
  xpReward: number;
  progress: number;
  state: ModuleNodeState;
}

interface SectionWithMeta {
  level: CECRLevel;
  title: string;
  objective: string;
  modules: ModuleWithMeta[];
}

export default function Curriculum() {
  const { t } = useTranslation();
  const { cecrLevel } = useUserProgress();

  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const sections: SectionWithMeta[] = useMemo(() => {
    const userIdx = LEVELS.indexOf(cecrLevel as CECRLevel);

    return LEVELS.map((level) => {
      const data = curriculum.find((c) => c.level === level);
      const levelIdx = LEVELS.indexOf(level);

      const modulesRaw = data?.modules ?? [];
      let currentMarked = false;

      const modules: ModuleWithMeta[] = modulesRaw.map((m, idx) => {
        const lessonsCount = m.lessons?.length ?? 0;
        const progress = 0;

        let state: ModuleNodeState;
        if (levelIdx > userIdx + 1) {
          state = 'locked';
        } else if (progress === 100) {
          state = 'completed';
        } else if (level === cecrLevel && !currentMarked) {
          state = 'current';
          currentMarked = true;
        } else {
          state = 'available';
        }

        return {
          id: m.id,
          number: m.number ?? idx + 1,
          title: m.title ?? `${t('curriculum.module')} ${idx + 1}`,
          theme: m.theme,
          totalLessons: lessonsCount,
          durationMinutes: lessonsCount * 12,
          xpReward: lessonsCount * 50,
          progress,
          state,
        };
      });

      return {
        level,
        title: data?.title ?? '',
        objective: data?.objective ?? '',
        modules,
      };
    });
  }, [cecrLevel, t]);

  const selectedModule = useMemo(() => {
    if (!selectedKey) return null;
    for (const section of sections) {
      const m = section.modules.find((x) => x.id === selectedKey);
      if (m) return { section, module: m };
    }
    return null;
  }, [selectedKey, sections]);

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div initial="hidden" animate="visible" variants={slideUp}>
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-2 text-center">{t('curriculum.title')}</h1>
        <p className="text-muted-foreground text-center mb-10">
          {t('curriculum.subtitle')} <Badge variant="level" className="ml-2">{cecrLevel}</Badge>
        </p>
      </motion.div>

      <div className="space-y-16 max-w-2xl mx-auto">
        {sections.map((section, sIdx) => (
          <motion.section
            key={section.level}
            id={`niveau-${section.level.toLowerCase()}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: sIdx * 0.05 }}
          >
            <div className={`rounded-3xl bg-gradient-to-br ${LEVEL_HEADER_GRADIENTS[section.level]} px-6 py-5 mb-8 shadow-sm`}>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white/80 backdrop-blur shadow-sm flex items-center justify-center font-display font-extrabold text-xl text-cia-blue-700">
                  {section.level}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display font-bold text-xl text-cia-blue-700 truncate">
                    {section.title || t(`landing.cecr.${section.level.toLowerCase()}_label`)}
                  </h2>
                  <p className="text-xs text-cia-blue-700/70 line-clamp-2">
                    {section.objective || t(`landing.cecr.${section.level.toLowerCase()}_desc`)}
                  </p>
                </div>
              </div>
            </div>

            {section.modules.length === 0 ? (
              <div className="text-center py-8 text-sm text-muted-foreground italic">
                {t('curriculum.coming_soon')}
              </div>
            ) : (
              <div className="relative" style={{ minHeight: section.modules.length * 110 }}>
                <ZigzagPath modulesCount={section.modules.length} level={section.level} />

                <div className="relative flex flex-col gap-12 pt-4">
                  {section.modules.map((mod, mIdx) => {
                    const side = mIdx % 2 === 0 ? 'justify-start' : 'justify-end';
                    const icon = getModuleIcon(mod.title, mod.theme);
                    const isCurrent = mod.state === 'current';

                    return (
                      <div
                        key={mod.id}
                        className={`flex ${side}`}
                        style={{
                          paddingLeft:  mIdx % 2 === 0 ? '12%' : 0,
                          paddingRight: mIdx % 2 === 1 ? '12%' : 0,
                        }}
                      >
                        <div className="relative flex items-center gap-3">
                          {isCurrent && (
                            <div
                              className={`absolute ${
                                mIdx % 2 === 0 ? 'left-full ml-3' : 'right-full mr-3'
                              } top-1/2 -translate-y-1/2 hidden sm:block`}
                            >
                              <MascotPresence
                                level={cecrLevel as CECRLevel}
                                mood="encouraging"
                                size={56}
                              />
                            </div>
                          )}

                          <ModuleNode
                            index={mIdx}
                            title={mod.title}
                            icon={icon}
                            state={mod.state}
                            onClick={() => setSelectedKey(mod.id)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.section>
        ))}
      </div>

      {selectedModule && (
        <ModuleDrawer
          open={selectedKey != null}
          onOpenChange={(o) => !o && setSelectedKey(null)}
          moduleId={selectedModule.module.id}
          index={selectedModule.module.number - 1}
          title={selectedModule.module.title}
          theme={selectedModule.module.theme}
          icon={getModuleIcon(selectedModule.module.title, selectedModule.module.theme)}
          state={selectedModule.module.state}
          level={selectedModule.section.level}
          totalLessons={selectedModule.module.totalLessons}
          durationMinutes={selectedModule.module.durationMinutes}
          xpReward={selectedModule.module.xpReward}
          progress={selectedModule.module.progress}
        />
      )}
    </div>
  );
}
