import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Shield, Compass, ClipboardCheck, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useOnboarding } from '@/hooks/useOnboarding';

export function AccountActions() {
  const { t } = useTranslation();
  const { isAdmin, signOut } = useAuth();
  const { restart } = useOnboarding();

  return (
    <div className="space-y-2">
      {isAdmin && (
        <Link to="/admin" className="block">
          <Button variant="outline" className="w-full justify-start gap-3 rounded-xl">
            <Shield className="h-4 w-4" />
            {t('profile.adminAccess')}
          </Button>
        </Link>
      )}
      <Button variant="outline" className="w-full justify-start gap-3 rounded-xl" onClick={restart}>
        <Compass className="h-4 w-4" />
        {t('profile.redoOnboarding')}
      </Button>
      <Link to="/test-niveau" className="block">
        <Button variant="outline" className="w-full justify-start gap-3 rounded-xl">
          <ClipboardCheck className="h-4 w-4" />
          {t('profile.redoPlacement')}
        </Button>
      </Link>
      <Button
        variant="ghost"
        className="w-full justify-start gap-3 rounded-xl text-destructive hover:text-destructive hover:bg-destructive/10"
        onClick={signOut}
      >
        <LogOut className="h-4 w-4" />
        {t('profile.logout')}
      </Button>
    </div>
  );
}