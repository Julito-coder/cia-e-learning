import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MascotPresence } from '@/components/characters/MascotPresence';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-mistral pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background décoratifs flottants */}
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-gradient-sun opacity-25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-gradient-sea opacity-15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-dawn opacity-10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
          {/* === Colonne contenu === */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 relative z-10 text-center lg:text-left"
          >
            {/* Glass badge institution */}
            <motion.div variants={staggerItem} className="flex justify-center lg:justify-start">
              <div className="inline-flex glass rounded-full px-4 py-2 gap-2 items-center text-sm font-medium text-cia-blue-700 shadow-glass">
                <Sparkles className="h-4 w-4 text-cia-gold-500" />
                <span>{t('landing.hero.badge')}</span>
              </div>
            </motion.div>

            {/* Heading hero — title_part1 plain, title_part2 in gradient gold-shine */}
            <motion.h1
              variants={staggerItem}
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-cia-blue-900"
            >
              {t('landing.hero.title_part1')}
              <br />
              <span className="bg-gradient-gold-shine bg-clip-text text-transparent">
                {t('landing.hero.title_part2')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t('landing.hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
            >
              <Button asChild variant="gradient" size="cta" className="rounded-2xl group">
                <Link to="/test-niveau" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  {t('landing.hero.cta_primary')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="cta" className="rounded-2xl">
                <Link to="/catalogue">{t('landing.hero.cta_secondary')}</Link>
              </Button>
            </motion.div>

            {/* Stats glass-adaptive */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-3 pt-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="glass-adaptive rounded-2xl p-3 text-center shadow-sm">
                <Users className="h-4 w-4 mx-auto mb-1 text-cia-blue-500" />
                <div className="font-display font-extrabold text-2xl md:text-3xl text-cia-blue-700 tabular-nums">
                  2 000+
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                  {t('landing.hero.stats.students')}
                </div>
              </div>
              <div className="glass-adaptive rounded-2xl p-3 text-center shadow-sm">
                <TrendingUp className="h-4 w-4 mx-auto mb-1 text-cia-gold-500" />
                <div className="font-display font-extrabold text-2xl md:text-3xl text-cia-gold-600 tabular-nums">
                  95%
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                  {t('landing.hero.stats.success')}
                </div>
              </div>
              <div className="glass-adaptive rounded-2xl p-3 text-center shadow-sm">
                <Award className="h-4 w-4 mx-auto mb-1 text-cia-blue-500" />
                <div className="font-display font-extrabold text-2xl md:text-3xl text-cia-blue-700 tabular-nums">
                  35+
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                  {t('landing.hero.stats.years')}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* === Colonne mascotte === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 14, stiffness: 180, delay: 0.3 }}
            className="relative flex justify-center items-center order-first lg:order-last py-4"
          >
            {/* Halo doré ambient derrière mascotte */}
            <div
              className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-cia-gold-300/30 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 m-auto w-56 h-56 rounded-full bg-cia-gold-400/20 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Mascotte Marie. Mobile: 180px hidden via responsive container. Desktop: 280px */}
            <div className="relative z-10 hidden md:block">
              <MascotPresence mood="encouraging" size={280} />
            </div>
            <div className="relative z-10 md:hidden">
              <MascotPresence mood="encouraging" size={180} />
            </div>

            {/* Confetti décoratifs flottants */}
            <motion.div
              className="absolute top-8 right-4 text-2xl"
              animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-2 text-xl"
              animate={{ y: [0, -6, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              aria-hidden="true"
            >
              🇫🇷
            </motion.div>
            <motion.div
              className="absolute top-1/3 -right-2 text-xl"
              animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              aria-hidden="true"
            >
              ⭐
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
