import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { scalePop } from '@/lib/animations';

export function CTASection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-g-sea text-white">
      <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-cia-spark-light/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full bg-g-spark opacity-25 blur-3xl pointer-events-none" aria-hidden="true" />
      <motion.div
        className="container relative text-center max-w-3xl"
        variants={scalePop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">{t('landing.cta_final.title')}</h2>
        <p className="mt-4 text-lg text-white/80">{t('landing.cta_final.subtitle')}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/test-niveau">
            <Button variant="spark" size="cta" className="w-full sm:w-auto group bg-white text-cia-blue-900 hover:bg-white/90 hover:brightness-100 [background-image:none]">
              {t('landing.cta_final.cta_primary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
          <Link to="/tarifs">
            <Button variant="outline" size="cta" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
              {t('landing.cta_final.cta_secondary')}
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
