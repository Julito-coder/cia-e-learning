import { motion } from 'framer-motion';
import { Check, Star, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function Pricing() {
  const { t } = useTranslation();
  const free    = t('landing.pricing.free_features',    { returnObjects: true }) as string[];
  const premium = t('landing.pricing.premium_features', { returnObjects: true }) as string[];
  const cia     = t('landing.pricing.cia_features',     { returnObjects: true }) as string[];

  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center mb-14 tracking-tight">
          {t('landing.pricing.title')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Découverte */}
          <motion.div variants={staggerItem} className="flex">
            <Card className="p-7 flex flex-col w-full">
              <h3 className="font-display text-xl mb-2">{t('landing.pricing.free_title')}</h3>
              <p className="font-display text-3xl mb-6">{t('landing.pricing.free_price')}</p>
              <ul className="space-y-3 mb-7 flex-1">
                {free.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-0.5 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/inscription">
                <Button variant="outline" className="w-full" size="lg">{t('landing.pricing.free_cta')}</Button>
              </Link>
            </Card>
          </motion.div>

          {/* Premium */}
          <motion.div variants={staggerItem} className="flex md:-translate-y-2">
            <Card className="p-7 flex flex-col w-full ring-2 ring-cia-gold-300/40 shadow-xl relative bg-card">
              <Badge variant="league-gold" className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 gap-1">
                <Star className="h-3.5 w-3.5" />
                {t('landing.pricing.premium_badge')}
              </Badge>
              <h3 className="font-display text-xl mb-2">{t('landing.pricing.premium_title')}</h3>
              <p className="font-display text-3xl mb-1">{t('landing.pricing.premium_price')}</p>
              <p className="text-xs text-muted-foreground mb-6">{t('landing.pricing.premium_billing')}</p>
              <ul className="space-y-3 mb-7 flex-1">
                {premium.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-0.5 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/inscription?plan=premium">
                <Button variant="gradient" className="w-full" size="lg">{t('landing.pricing.premium_cta')}</Button>
              </Link>
            </Card>
          </motion.div>

          {/* Étudiants CIA */}
          <motion.div variants={staggerItem} className="flex">
            <Card className="p-7 flex flex-col w-full">
              <Badge variant="level" className="self-start mb-2 gap-1">
                <GraduationCap className="h-3.5 w-3.5" />
                {t('landing.pricing.cia_badge')}
              </Badge>
              <h3 className="font-display text-xl mb-2">{t('landing.pricing.cia_title')}</h3>
              <p className="font-display text-3xl mb-1">{t('landing.pricing.cia_price')}</p>
              <p className="text-xs text-muted-foreground mb-6">{t('landing.pricing.cia_billing')}</p>
              <ul className="space-y-3 mb-7 flex-1">
                {cia.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-0.5 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/inscription?context=cia">
                <Button variant="gold" className="w-full" size="lg">{t('landing.pricing.cia_cta')}</Button>
              </Link>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
