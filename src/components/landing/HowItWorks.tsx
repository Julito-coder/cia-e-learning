import { motion } from 'framer-motion';
import { Target, GraduationCap, Flame, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, staggerItem } from '@/lib/animations';

const STEPS = [
  { icon: Target,        bg: 'bg-cia-blue-50 text-cia-blue-700', titleKey: 'landing.how_it_works.step1_title', descKey: 'landing.how_it_works.step1_desc' },
  { icon: GraduationCap, bg: 'bg-cia-gold/15 text-cia-gold-600', titleKey: 'landing.how_it_works.step2_title', descKey: 'landing.how_it_works.step2_desc' },
  { icon: Flame,         bg: 'bg-streak/15 text-streak',          titleKey: 'landing.how_it_works.step3_title', descKey: 'landing.how_it_works.step3_desc' },
  { icon: Trophy,        bg: 'bg-cia-gold/15 text-cia-gold-600', titleKey: 'landing.how_it_works.step4_title', descKey: 'landing.how_it_works.step4_desc' },
];

export function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center mb-14 tracking-tight">
          {t('landing.how_it_works.title')}
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STEPS.map(({ icon: Icon, bg, titleKey, descKey }) => (
            <motion.div key={titleKey} variants={staggerItem} className="text-center">
              <div className={`mx-auto mb-5 h-14 w-14 rounded-2xl ${bg} flex items-center justify-center`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg mb-2">{t(titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
