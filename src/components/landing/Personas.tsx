import { motion } from 'framer-motion';
import { Laptop, GraduationCap, Building2, ArrowRight, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { staggerContainer, staggerItem, useTilt3D } from '@/lib/animations';

const PERSONAS = [
  { icon: Laptop,        titleKey: 'landing.personas.b2c_title',    descKey: 'landing.personas.b2c_desc' },
  { icon: GraduationCap, titleKey: 'landing.personas.cia_title',    descKey: 'landing.personas.cia_desc' },
  { icon: Building2,     titleKey: 'landing.personas.school_title', descKey: 'landing.personas.school_desc' },
];

interface PersonaCardProps {
  Icon: LucideIcon;
  titleKey: string;
  descKey: string;
  t: (key: string) => string;
}

function PersonaCard({ Icon, titleKey, descKey, t }: PersonaCardProps) {
  const tilt = useTilt3D({ max: 7, scale: 1.02, perspective: 1100 });
  return (
    <div {...tilt.bind} style={tilt.style} className="h-full">
      <Card interactive className="p-7 h-full">
        <div className="h-12 w-12 rounded-2xl bg-cia-blue-50 text-cia-blue-700 flex items-center justify-center mb-5">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl mb-2">{t(titleKey)}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(descKey)}</p>
        <p className="text-sm font-bold text-cia-blue-700 inline-flex items-center gap-1.5">
          {t('landing.personas.learn_more')} <ArrowRight className="h-4 w-4" />
        </p>
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
          {PERSONAS.map(({ icon: Icon, titleKey, descKey }) => (
            <motion.div key={titleKey} variants={staggerItem}>
              <PersonaCard Icon={Icon} titleKey={titleKey} descKey={descKey} t={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
