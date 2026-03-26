import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function AdminSettings() {
  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <h1 className="font-display text-2xl font-bold">Paramètres</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Paramètres de la plateforme</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium text-sm">Notifications email</p>
              <p className="text-xs text-muted-foreground">Envoi automatique d'emails (bienvenue, relance)</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => toast.info('Fonctionnalité à venir')}>
              Configurer
            </Button>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium text-sm">Intégration CRM</p>
              <p className="text-xs text-muted-foreground">Connexion API REST avec le CRM existant</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => toast.info('Fonctionnalité à venir')}>
              Configurer
            </Button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-sm">Codes promo</p>
              <p className="text-xs text-muted-foreground">Gérer les codes de réduction pour anciens étudiants</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => toast.info('Fonctionnalité à venir')}>
              Gérer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
