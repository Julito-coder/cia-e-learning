import { useState, useMemo, useCallback, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { LevelBadge } from '@/components/courses/LevelBadge';
import { curriculum } from '@/data/curriculum';
import { useUserProgress } from '@/hooks/useUserProgress';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { ModuleNode, type ModuleNodeState } from '@/components/courses/ModuleNode';
import { ZigzagPath } from '@/components/courses/ZigzagPath';
import { ModuleDrawer } from '@/components/courses/ModuleDrawer';
import { Spark } from '@/components/spark/Spark';
import { StreakFlame } from '@/components/gamification/StreakFlame';
import { XPBurst } from '@/components/gamification/XPBurst';
import { levelUpSequence } from '@/lib/confetti';
import { notify } from '@/lib/notify';
import { getModuleIcon } from '@/lib/moduleIcon';
import {
  computeParcoursCoords,
  computeParcoursTotalHeight,
} from '@/lib/curriculumPath';
import { UnitDecor } from '@/components/parcours/decor/UnitDecor';
import { AmbientEmbers } from '@/components/parcours/AmbientEmbers';
import { XPChestNode, type ChestState } from '@/components/parcours/XPChestNode';
import { TrophyNode, type TrophyState } from '@/components/parcours/TrophyNode';
import type { CECRLevel } from '@/data/demo-courses';
import { Sparkles } from 'lucide-react';

/**
 * Item du parcours — un module, un coffre (palier bonus tous les 3 modules)
 * ou un trophée (fin d'unité). Tous placés sur la même spline.
 */
type ParcoursItem =
  | { kind: 'module';  module: { id: string; number: number; title: string; theme?: string; totalLessons: number; durationMinutes: number; xpReward: number; progress: number; state: ModuleNodeState } }
  | { kind: 'chest';   chestId: string; state: ChestState; xpReward: number; afterModuleId: string }
  | { kind: 'trophy';  trophyId: string; state: TrophyState };

const LEVELS: CECRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/**
 * Teinte du tracé par section CECR — progression visible d'un coup d'œil
 * (Batch A Bloc 2). Cohérent avec `LevelBadge` (charte v2 §8).
 */
const CECR_PATH_TINT: Partial<Record<CECRLevel, string>> = {
  A1: 'hsl(var(--success-500))',
  A2: 'hsl(var(--success-600))',
  B1: 'hsl(var(--cia-blue-400))',
  B2: 'hsl(var(--cia-blue-500))',
  C1: 'hsl(var(--cia-blue-700))',
  C2: 'hsl(var(--cia-red-500))',
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

interface RewardEvent {
  /** Center coordinates (viewport) for the XPBurst origin. */
  x: number;
  y: number;
  xp: number;
  /** Identifier so React re-renders the burst on every event. */
  key: number;
}

export default function Curriculum() {
  const { t } = useTranslation();
  const { cecrLevel, totalXP } = useUserProgress();
  const { streak } = useDailyChallenge();
  const reduced = useReducedMotion();

  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  /** Modules « complétés à la volée » dans cette session (démo,
   *  ne touche pas la BDD — sprint 4). */
  const [demoCompleted, setDemoCompleted] = useState<Set<string>>(() => new Set());
  const [reward, setReward] = useState<RewardEvent | null>(null);
  const [sparkMood, setSparkMood] = useState<'encouraging' | 'celebrating'>('encouraging');
  /** Refs vers chaque bouton de nœud — sert à localiser le centre pour le XPBurst. */
  const nodeRefs = useRef<Map<string, HTMLElement>>(new Map());

  const sections: SectionWithMeta[] = useMemo(() => {
    const userIdx = LEVELS.indexOf(cecrLevel as CECRLevel);
    return LEVELS.map((level) => {
      const data = curriculum.find((c) => c.level === level);
      const levelIdx = LEVELS.indexOf(level);
      const modulesRaw = data?.modules ?? [];

      let currentMarked = false;
      const modules: ModuleWithMeta[] = modulesRaw.map((m, idx) => {
        const lessonsCount = m.lessons?.length ?? 0;
        const isDemoCompleted = demoCompleted.has(m.id);
        const progress: number = isDemoCompleted ? 100 : 0;

        let state: ModuleNodeState;
        if (isDemoCompleted) {
          state = 'completed';
        } else if (levelIdx > userIdx + 1) {
          state = 'locked';
        } else if (level === cecrLevel && !currentMarked) {
          state = 'current';
          currentMarked = true;
        } else if (levelIdx === userIdx + 1 && idx === 0 && !currentMarked) {
          // Premier module du niveau suivant = available (incite à avancer)
          state = 'available';
        } else if (levelIdx <= userIdx) {
          state = 'available';
        } else {
          state = 'locked';
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
  }, [cecrLevel, t, demoCompleted]);

  const selectedModule = useMemo(() => {
    if (!selectedKey) return null;
    for (const section of sections) {
      const m = section.modules.find((x) => x.id === selectedKey);
      if (m) return { section, module: m };
    }
    return null;
  }, [selectedKey, sections]);

  /** Total des modules complétés (tous niveaux) — pilote la fierté globale. */
  const totalCompleted = useMemo(
    () => sections.reduce((acc, s) => acc + s.modules.filter((m) => m.state === 'completed').length, 0),
    [sections],
  );
  const totalModules = useMemo(
    () => sections.reduce((acc, s) => acc + s.modules.length, 0),
    [sections],
  );

  /** Séquence récompense — démo uniquement.
   *  XPBurst au centre du nœud, mood Spark celebrating 1.5 s,
   *  path fill via re-calcul des sections, et si l'unité est terminée :
   *  confetti `levelUpSequence` (bleu + blanc) + toast. */
  const handleSimulateComplete = useCallback(
    (moduleId: string, xpReward: number) => {
      const el = nodeRefs.current.get(moduleId);
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;
      if (el) {
        const r = el.getBoundingClientRect();
        x = r.left + r.width / 2;
        y = r.top + r.height / 2;
      }

      setDemoCompleted((prev) => {
        const next = new Set(prev);
        next.add(moduleId);
        return next;
      });
      setReward({ x, y, xp: xpReward, key: Date.now() });
      setSparkMood('celebrating');

      const sparkTimer = window.setTimeout(() => setSparkMood('encouraging'), 1800);

      // Si toute l'unité est terminée → mini level-up (confetti + toast)
      window.setTimeout(() => {
        const section = sections.find((s) => s.modules.some((m) => m.id === moduleId));
        if (!section) return;
        const remaining = section.modules.filter(
          (m) => m.id !== moduleId && m.state !== 'completed',
        ).length;
        if (remaining === 0) {
          levelUpSequence();
          notify.success(t('curriculum.unit_complete_toast', { level: section.level }));
        }
      }, 200);

      return () => window.clearTimeout(sparkTimer);
    },
    [sections, t],
  );

  /* ===== Reveal premium : sub-header + sections en stagger ===== */
  const sectionItem = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring' as const, stiffness: 220, damping: 24 },
        },
      };

  return (
    <div className="relative pb-20">
      {/* Sub-header sticky — titre parcours + cluster stats compact.
          Glass discret sous le header global de l'app. */}
      <div className="sticky top-14 sm:top-16 z-30 backdrop-blur-md bg-background/80 border-b border-ink-100">
        <div className="container max-w-3xl py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <LevelBadge level={cecrLevel} size={36} />
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cia-blue-500">
                {t('curriculum.title')}
              </p>
              <p className="font-display font-extrabold text-sm md:text-base text-foreground truncate tabular-nums">
                {totalCompleted} / {totalModules}{' '}
                <span className="text-muted-foreground font-normal">modules</span>
              </p>
            </div>
          </div>

          {/* Cluster stats compact — pas tout UserIndicators pour rester sobre */}
          <div className="flex items-center gap-2 shrink-0">
            <Badge variant="streak" className="gap-1.5 px-2 py-1">
              <StreakFlame streak={streak} />
              <span className="tabular-nums text-xs">{streak}</span>
            </Badge>
            <Badge variant="xp" className="gap-1.5 px-2 py-1 hidden xs:inline-flex">
              <Sparkles className="h-3 w-3" />
              <span className="tabular-nums text-xs">{totalXP.toLocaleString('fr-FR')}</span>
            </Badge>
          </div>
        </div>
      </div>

      <main className="container max-w-2xl py-6 sm:py-10 space-y-12">
        {sections.map((section) => {
          const sectionCompleted = section.modules.filter((m) => m.state === 'completed').length;
          const sectionTotal = section.modules.length;
          /** Position du nœud current dans cette section (pour la bulle Spark). */
          const currentIdx = section.modules.findIndex((m) => m.state === 'current');
          const remaining = sectionTotal - sectionCompleted;
          const bubbleText = (() => {
            if (sectionCompleted === 0) return t('curriculum.bubble_start_unit');
            if (remaining === 1) return t('curriculum.bubble_continue');
            return t(
              remaining > 1 ? 'curriculum.bubble_keep_going_plural' : 'curriculum.bubble_keep_going',
              { count: remaining },
            );
          })();

          return (
            <motion.section
              key={section.level}
              id={`niveau-${section.level.toLowerCase()}`}
              variants={sectionItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Header d'unité — radius 24px, fond blanc, bordure ink-100 */}
              <div className="rounded-3xl bg-card border border-ink-100 px-5 py-4 mb-6 shadow-sm flex items-center gap-4">
                <LevelBadge level={section.level} size={48} />
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cia-blue-500">
                    {t('curriculum.unit_label')} · {section.level}
                  </p>
                  <h2 className="font-display font-extrabold text-lg md:text-xl text-foreground truncate tracking-[-0.01em]">
                    {section.title || section.objective || section.level}
                  </h2>
                </div>
                {sectionTotal > 0 && (
                  <div className="text-right shrink-0">
                    <p className="font-display font-extrabold tabular-nums text-cia-blue-700 dark:text-cia-blue-300">
                      {sectionCompleted}
                      <span className="text-muted-foreground font-normal">/{sectionTotal}</span>
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {t('curriculum.module')}
                    </p>
                  </div>
                )}
              </div>

              {section.modules.length === 0 ? (
                <div className="text-center py-8 text-sm text-muted-foreground italic">
                  {t('curriculum.coming_soon')}
                </div>
              ) : (() => {
                /* Bloc 4 — items enrichis : module → chest (tous les 3) → trophy fin. */
                const items: ParcoursItem[] = [];
                section.modules.forEach((m, i) => {
                  items.push({ kind: 'module', module: m });
                  // Insérer un coffre après chaque 3e module (sauf le dernier)
                  if ((i + 1) % 3 === 0 && i < section.modules.length - 1) {
                    items.push({
                      kind: 'chest',
                      chestId: `${section.level}-chest-${i}`,
                      state: m.state === 'completed' ? 'openable' : 'locked',
                      xpReward: 150,
                      afterModuleId: m.id,
                    });
                  }
                });
                // Trophée fin d'unité
                const allCompleted = section.modules.every((m) => m.state === 'completed');
                items.push({
                  kind: 'trophy',
                  trophyId: `${section.level}-trophy`,
                  state: allCompleted ? 'unlocked' : 'locked',
                });

                /* Bloc 1 — spline continue + positionnement absolu sur les items. */
                const coords = computeParcoursCoords(
                  items.map((it) => ({ kind: it.kind })),
                );
                const sectionHeight = computeParcoursTotalHeight(items.length);
                const fillRatio =
                  items.length > 1
                    ? sectionCompleted / Math.max(1, items.length - 1)
                    : sectionCompleted;
                const tint = CECR_PATH_TINT[section.level];
                /** Index dans items du module current — pour bulle Spark + braises. */
                const currentItemIdx = items.findIndex(
                  (it) => it.kind === 'module' && it.module.state === 'current',
                );
                const currentCoord = currentItemIdx >= 0 ? coords[currentItemIdx] : null;

                return (
                <div
                  className="relative"
                  style={{ height: sectionHeight }}
                >
                  {/* Bloc 3a — Décor latéral Côte d'Azur (z-0, derrière) */}
                  <UnitDecor level={section.level} height={sectionHeight} />

                  <ZigzagPath
                    coords={coords}
                    stroke={tint}
                    fillRatio={fillRatio}
                  />

                  {/* Bloc 3c — Braises ambiance autour du nœud current */}
                  {currentCoord && (
                    <div
                      className="absolute"
                      style={{
                        left: `calc(${currentCoord.x}% - 45px)`,
                        top: currentCoord.y - 220,
                        zIndex: 1,
                      }}
                    >
                      <AmbientEmbers count={4} height={220} />
                    </div>
                  )}

                  <motion.div
                    className="relative w-full h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={
                      reduced
                        ? { hidden: {}, visible: { transition: { duration: 0 } } }
                        : { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }
                    }
                  >
                    {items.map((item, itemIdx) => {
                      const coord = coords[itemIdx];
                      const sideRight = coord.side === 'right';
                      const itemKey =
                        item.kind === 'module' ? item.module.id :
                        item.kind === 'chest'  ? item.chestId    :
                                                 item.trophyId;
                      const itemVariants = reduced
                        ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
                        : {
                            hidden: { opacity: 0, scale: 0.85 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: { type: 'spring' as const, damping: 12, stiffness: 220, mass: 0.8 },
                            },
                          };
                      return (
                        <motion.div
                          key={itemKey}
                          variants={itemVariants}
                          className="absolute"
                          style={{
                            left: `${coord.x}%`,
                            top: coord.y,
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                          <div className="relative flex items-center gap-3">
                            {/* Spark compagnon + bulle contextuelle — placé du
                                bon côté selon le `side` du nœud (Bloc 5). */}
                            {item.kind === 'module' && itemIdx === currentItemIdx && (
                              <div
                                className={`absolute top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 ${
                                  sideRight ? 'right-full mr-3 flex-row-reverse' : 'left-full ml-3'
                                }`}
                              >
                                <Spark mood={sparkMood} size={56} halo />
                                <motion.div
                                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  transition={{
                                    delay: 0.6,
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 22,
                                  }}
                                  className="relative max-w-[200px] bg-card border border-cia-spark-mid/30 rounded-2xl px-3 py-2 shadow-elev-lg"
                                >
                                  <p className="text-xs font-semibold text-foreground leading-snug">
                                    {bubbleText}
                                  </p>
                                  <span
                                    aria-hidden="true"
                                    className={`absolute top-1/2 -translate-y-1/2 h-3 w-3 rotate-45 bg-card border-cia-spark-mid/30 ${
                                      sideRight
                                        ? 'left-[-7px] border-l border-b'
                                        : 'right-[-7px] border-r border-t'
                                    }`}
                                  />
                                </motion.div>
                              </div>
                            )}

                            {item.kind === 'module' && (
                              <div
                                ref={(el) => {
                                  if (el) nodeRefs.current.set(item.module.id, el);
                                  else nodeRefs.current.delete(item.module.id);
                                }}
                              >
                                <ModuleNode
                                  index={item.module.number - 1}
                                  title={item.module.title}
                                  icon={getModuleIcon(item.module.title, item.module.theme)}
                                  state={item.module.state}
                                  onClick={() => setSelectedKey(item.module.id)}
                                />
                              </div>
                            )}

                            {item.kind === 'chest' && (
                              <XPChestNode
                                state={item.state}
                                xpReward={item.xpReward}
                                onClick={() => {
                                  // Démo : ouverture immédiate sans animation
                                  // d'ouverture (= Batch B). On déclenche juste
                                  // un XPBurst pour le feedback.
                                  if (item.state === 'openable') {
                                    handleSimulateComplete(item.afterModuleId, item.xpReward);
                                  }
                                }}
                              />
                            )}

                            {item.kind === 'trophy' && (
                              <TrophyNode state={item.state} level={section.level} />
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
                );
              })()}
            </motion.section>
          );
        })}
      </main>

      {/* Mobile : barre flottante avec Spark + bulle (toujours visible) */}
      <div
        className="fixed bottom-20 right-4 z-40 sm:hidden flex items-end gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 220, damping: 20 }}
        >
          <Spark mood={sparkMood} size={56} halo />
        </motion.div>
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
          onSimulateComplete={() =>
            handleSimulateComplete(selectedModule.module.id, selectedModule.module.xpReward)
          }
        />
      )}

      {/* Séquence récompense : XPBurst au centre du nœud cliqué. */}
      {reward && (
        <XPBurst
          key={reward.key}
          x={reward.x}
          y={reward.y}
          amount={reward.xp}
          onComplete={() => setReward(null)}
        />
      )}
    </div>
  );
}
