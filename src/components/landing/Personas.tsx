import { motion } from 'framer-motion';
import { Laptop, GraduationCap, Building2, ArrowRight, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { staggerContainer, staggerItem, useTilt3D } from '@/lib/animations';

const PERSONAS = [
  {
    icon: Laptop,
    titleKey: 'landing.personas.b2c_title',
    descKey: 'landing.personas.b2c_desc',
    statValueKey: 'landing.personas.b2c_stat_value',
    statLabelKey: 'landing.personas.b2c_stat_label',
  },
  {
    icon: GraduationCap,
    titleKey: 'landing.personas.cia_title',
    descKey: 'landing.personas.cia_desc',
    statValueKey: 'landing.personas.cia_stat_value',
    statLabelKey: 'landing.personas.cia_stat_label',
  },
  {
    icon: Building2,
    titleKey: 'landing.personas.school_title',
    descKey: 'landing.personas.school_desc',
    statValueKey: 'landing.personas.school_stat_value',
    statLabelKey: 'landing.personas.school_stat_label',
  },
];

interface PersonaCardProps {
  Icon: LucideIcon;
  titleKey: string;
  descKey: string;
  statValueKey: string;
  statLabelKey: string;
  t: (key: string) => string;
}

function PersonaCard({ Icon, titleKey, descKey, statValueKey, statLabelKey, t }: PersonaCardProps) {
  const tilt = useTilt3D({ max: 7, scale: 1.02, perspective: 1100 });
  return (
    <div {...tilt.bind} style={tilt.style} className="h-full">
      <Card interactive variant="elevated" tone="blue" className="p-7 h-full flex flex-col">
        <div className="h-12 w-12 rounded-2xl bg-g-sea text-white flex items-center justify-center mb-5 shadow-glass">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl mb-2">{t(titleKey)}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(descKey)}</p>

        <div className="mt-auto">
          <div className="border-t border-cia-blue-100 pt-4 mb-4">
            <p className="font-display text-2xl font-extrabold text-cia-gold-600 tabular-nums">
              {t(statValueKey)}
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
              {t(statLabelKey)}
            </p>
          </div>
          <p className="text-sm font-bold text-cia-blue-700 inline-flex items-center gap-1.5">
            {t('landing.personas.learn_more')} <ArrowRight className="h-4 w-4" />
          </p>
        </div>
      </Card>
    </div>
  );
}

export function Personas() {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center mb-14 tracking-tight">
          {t('landing.personas.title')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PERSONAS.map(({ icon: Icon, titleKey, descKey, statValueKey, statLabelKey }) => (
            <motion.div key={titleKey} variants={staggerItem}>
              <PersonaCard
                Icon={Icon}
                titleKey={titleKey}
                descKey={descKey}
                statValueKey={statValueKey}
                statLabelKey={statLabelKey}
                t={t}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
