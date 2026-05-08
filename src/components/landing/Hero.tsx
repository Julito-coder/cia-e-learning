import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Flame, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cia-blue-50/40 via-background to-background">
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texte */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <Badge variant="level" className="mb-5 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              {t('landing.hero.badge')}
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              {t('landing.hero.title_part1')}
              <br />
              <span className="relative inline-block italic text-cia-gold-600">
                {t('landing.hero.title_part2')}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <motion.path
                    d="M2 7 Q 50 1, 100 5 T 198 4"
                    stroke="hsl(var(--cia-gold))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t('landing.hero.subtitle')}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/test-niveau">
                <Button variant="gradient" size="cta" className="w-full sm:w-auto group">
                  <Sparkles className="h-4 w-4" />
                  {t('landing.hero.cta_primary')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link to="/catalogue">
                <Button variant="outline" size="cta" className="w-full sm:w-auto">
                  {t('landing.hero.cta_secondary')}
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
              <span aria-hidden>✨</span> {t('landing.hero.trust')}
            </p>
          </motion.div>

          {/* Visuel animé */}
          <motion.div
            className="relative h-[420px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card mockup centrale */}
            <motion.div
              className="absolute inset-x-8 top-12 bottom-12 rounded-3xl bg-card border border-border/60 shadow-2xl p-6 flex flex-col"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="level" className="text-base px-3 py-1">B2</Badge>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Cours en cours</p>
                  <p className="font-display text-base">La nuance et l'argumentation</p>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-gradient-to-br from-cia-blue-50 to-cia-blue-100/40 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-cia-blue-500/60" />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2 text-xs font-semibold text-muted-foreground">
                  <span>68% complété · 7/10 leçons</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cia-blue-500 to-cia-gold"
                    initial={{ width: 0 }}
                    animate={{ width: '68%' }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Badge XP flottant */}
            <motion.div
              className="absolute top-4 right-0 bg-card rounded-2xl border border-border/60 shadow-xl p-3 flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <div className="h-10 w-10 rounded-xl bg-xp/15 flex items-center justify-center text-xp">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-success font-bold">+50 XP</p>
                <p className="text-sm font-display tabular-nums">1 250 XP</p>
              </div>
            </motion.div>

            {/* Badge streak flottant */}
            <motion.div
              className="absolute bottom-4 left-0 bg-card rounded-2xl border border-border/60 shadow-xl p-3 flex items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            >
              <div className="h-10 w-10 rounded-xl bg-streak/15 flex items-center justify-center text-streak">
                <Flame className="h-5 w-5 animate-streak-flame" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">Streak</p>
                <p className="text-sm font-display tabular-nums">12 jours</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
