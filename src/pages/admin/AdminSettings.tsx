import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Bell, Tag, Plug, AlertTriangle, Palette, Sun, Moon } from 'lucide-react';
import { notify } from '@/lib/notify';
import { AdminPageHeader } from '@/components/admin/AdminPageHeader';
import { AdminSectionCard } from '@/components/admin/AdminSectionCard';
import { supabase } from '@/integrations/supabase/client';

const SETTINGS_KEYS = {
  welcome: 'admin.settings.email_welcome',
  digest: 'admin.settings.email_digest',
  inactivity: 'admin.settings.email_inactivity',
  theme: 'admin.settings.theme',
};

function readBool(key: string, fallback = true) {
  const v = localStorage.getItem(key);
  return v === null ? fallback : v === 'true';
}

export default function AdminSettings() {
  const [welcome, setWelcome] = useState(true);
  const [digest, setDigest] = useState(true);
  const [inactivity, setInactivity] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [promos, setPromos] = useState<string[]>([]);

  useEffect(() => {
    setWelcome(readBool(SETTINGS_KEYS.welcome, true));
    setDigest(readBool(SETTINGS_KEYS.digest, true));
    setInactivity(readBool(SETTINGS_KEYS.inactivity, false));
    setTheme((localStorage.getItem(SETTINGS_KEYS.theme) as 'light' | 'dark') || 'light');

    supabase.from('subscriptions').select('promo_code').not('promo_code', 'is', null).then(({ data }) => {
      const unique = Array.from(new Set((data || []).map((r: any) => r.promo_code).filter(Boolean)));
      setPromos(unique);
    });
  }, []);

  const persist = (key: string, value: string | boolean) => {
    localStorage.setItem(key, String(value));
    notify.success('Préférence enregistrée');
  };

  const onWelcome = (v: boolean) => { setWelcome(v); persist(SETTINGS_KEYS.welcome, v); };
  const onDigest = (v: boolean) => { setDigest(v); persist(SETTINGS_KEYS.digest, v); };
  const onInactivity = (v: boolean) => { setInactivity(v); persist(SETTINGS_KEYS.inactivity, v); };
  const onTheme = (next: 'light' | 'dark') => { setTheme(next); persist(SETTINGS_KEYS.theme, next); };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <AdminPageHeader
        title="Paramètres"
        description="Configuration de la plateforme et préférences administrateur"
      />

      <AdminSectionCard title="Apparence" description="Personnalisez l'interface admin">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-primary/10 text-primary p-2"><Palette className="h-4 w-4" /></div>
            <div>
              <p className="text-sm font-medium">Thème</p>
              <p className="text-xs text-muted-foreground">Choisissez entre clair et sombre.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant={theme === 'light' ? 'default' : 'outline'} size="sm" onClick={() => onTheme('light')} className="gap-2">
              <Sun className="h-4 w-4" /> Clair
            </Button>
            <Button variant={theme === 'dark' ? 'default' : 'outline'} size="sm" onClick={() => onTheme('dark')} className="gap-2">
              <Moon className="h-4 w-4" /> Sombre
            </Button>
          </div>
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Notifications email" description="Emails envoyés automatiquement aux apprenants">
        <div className="space-y-3">
          {[
            { key: 'welcome', label: 'Email de bienvenue', desc: 'Envoyé à la création du compte', val: welcome, on: onWelcome },
            { key: 'digest', label: 'Récapitulatif hebdomadaire', desc: 'XP gagnés, classement, série', val: digest, on: onDigest },
            { key: 'inactivity', label: 'Relance d\'inactivité', desc: 'Après 7 jours sans connexion', val: inactivity, on: onInactivity },
          ].map((row) => (
            <div key={row.key} className="flex items-center justify-between gap-4 py-1">
              <div className="flex items-start gap-3 min-w-0">
                <div className="rounded-lg bg-muted p-2 text-muted-foreground shrink-0"><Bell className="h-4 w-4" /></div>
                <div className="min-w-0">
                  <p className="text-sm font-medium">{row.label}</p>
                  <p className="text-xs text-muted-foreground">{row.desc}</p>
                </div>
              </div>
              <Switch checked={row.val} onCheckedChange={row.on} />
            </div>
          ))}
        </div>
      </AdminSectionCard>

      <AdminSectionCard
        title="Codes promo"
        description="Codes utilisés pour les abonnements"
        action={<Button size="sm" variant="outline" onClick={() => notify.info('Création de codes — bientôt')}>Créer</Button>}
      >
        {promos.length === 0 ? (
          <p className="text-sm text-muted-foreground py-2">Aucun code promo n'a encore été utilisé.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {promos.map((p) => (
              <Badge key={p} variant="outline" className="font-mono">
                <Tag className="h-3 w-3 mr-1" /> {p}
              </Badge>
            ))}
          </div>
        )}
      </AdminSectionCard>

      <AdminSectionCard title="Intégration CRM" description="Synchronisation avec votre CRM existant">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-muted p-2 text-muted-foreground"><Plug className="h-4 w-4" /></div>
            <div>
              <p className="text-sm font-medium">API REST</p>
              <p className="text-xs text-muted-foreground">Webhooks et synchronisation des contacts.</p>
            </div>
          </div>
          <Badge variant="outline">Bientôt</Badge>
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Zone dangereuse" description="Opérations de maintenance">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium">Vider le cache analytics</p>
                <p className="text-xs text-muted-foreground">Force le recalcul des statistiques globales.</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => notify.success('Cache vidé')}>Vider</Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-4 rounded-lg border p-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium">Réindexer le glossaire</p>
                <p className="text-xs text-muted-foreground">Reconstruit l'index de recherche.</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => notify.success('Glossaire réindexé')}>Lancer</Button>
          </div>
        </div>
      </AdminSectionCard>
    </div>
  );
}
