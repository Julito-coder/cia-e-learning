import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Home, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-background to-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-lg text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          className="mx-auto h-24 w-24 rounded-3xl bg-gradient-to-br from-primary to-cia-gold-500 flex items-center justify-center shadow-xl mb-6 relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-primary/30 blur-2xl -z-10" />
          <Compass className="h-12 w-12 text-white" />
        </motion.div>
        <h1 className="font-display text-7xl font-extrabold text-primary mb-2 tracking-tight">
          404
        </h1>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Cette page s'est perdue en chemin
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée. Pas de panique,
          retrouvons votre chemin vers Antibes !
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button onClick={() => navigate('/')} size="lg">
            <Home className="h-4 w-4 mr-2" /> Retour à l'accueil
          </Button>
          <Button onClick={() => navigate('/catalogue')} size="lg" variant="outline">
            <BookOpen className="h-4 w-4 mr-2" /> Explorer les cours
          </Button>
        </div>
        <p className="text-[11px] text-muted-foreground mt-8 font-mono break-all">
          {location.pathname}
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;
