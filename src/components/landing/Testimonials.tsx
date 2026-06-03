import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { staggerContainer, staggerItem } from '@/lib/animations';

const TESTIMONIALS = [
  { quote: 'Je révise tous les jours pendant ma pause déj. En 3 mois je suis passée de A2 à B1.', name: 'Sofia M.',  meta: 'B1 · Italie',     initials: 'SM', accent: 'bg-cia-blue-100 text-cia-blue-700' },
  { quote: "Le défi du jour m'a sauvé de l'oubli. C'est devenu ma routine matinale.",              name: 'Carlos R.', meta: 'B2 · Brésil',    initials: 'CR', accent: 'bg-cia-gold/20 text-cia-gold-600' },
  { quote: "Après mon séjour à Antibes, l'app m'a permis de continuer sans perdre ce que j'avais appris.", name: 'Anna K.', meta: 'C1 · Allemagne', initials: 'AK', accent: 'bg-cia-blue-100 text-cia-blue-700' },
];

export function Testimonials() {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Charte v2 §6 — gradient signature `g-sunset` (red → rose → gold)
          posé en arrière-plan adouci pour signaler le registre « passion /
          témoignages » sans casser la lisibilité des cards. */}
      <div
        className="absolute inset-0 bg-g-sunset opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div className="container relative">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center mb-14 tracking-tight">
          {t('landing.testimonials.title')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {TESTIMONIALS.map((item) => (
            <motion.div key={item.name} variants={staggerItem}>
              <Card className="p-7 h-full flex flex-col bg-card/95 backdrop-blur-sm">
                <Quote className="h-7 w-7 text-cia-gold-700 mb-3" />
                <p className="text-base leading-relaxed text-foreground/90 flex-1">"{item.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className={`h-11 w-11 rounded-full ${item.accent} flex items-center justify-center font-bold text-sm`}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.meta}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
