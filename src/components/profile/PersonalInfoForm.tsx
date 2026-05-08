import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CountrySelect } from './CountrySelect';
import { useProfile } from '@/hooks/useProfile';
import { useInterfaceLanguage } from '@/hooks/useInterfaceLanguage';

const LANGS = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'es', label: 'Español',  flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', label: 'Русский',  flag: '🇷🇺' },
];

const schema = z.object({
  first_name: z.string().trim().max(50, { message: 'Max 50 caractères' }),
  last_name:  z.string().trim().max(50, { message: 'Max 50 caractères' }),
});

export function PersonalInfoForm() {
  const { t } = useTranslation();
  const { profile, update } = useProfile();
  const { language, setLanguage } = useInterfaceLanguage();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<{ first_name?: string; last_name?: string }>({});

  useEffect(() => {
    if (!profile) return;
    setFirstName(profile.first_name ?? '');
    setLastName(profile.last_name ?? '');
    setNationality(profile.nationality ?? null);
  }, [profile]);

  const dirty =
    profile != null &&
    ((profile.first_name ?? '') !== firstName ||
      (profile.last_name ?? '') !== lastName ||
      (profile.nationality ?? null) !== nationality);

  const handleSave = async () => {
    const parsed = schema.safeParse({ first_name: firstName, last_name: lastName });
    if (!parsed.success) {
      const e: typeof errors = {};
      parsed.error.issues.forEach((i) => { e[i.path[0] as 'first_name' | 'last_name'] = i.message; });
      setErrors(e);
      return;
    }
    setErrors({});
    setSaving(true);
    const res = await update({
      first_name: firstName.trim() || null,
      last_name: lastName.trim() || null,
      nationality,
    });
    setSaving(false);
    if (res.ok) toast.success(t('profile.saved'));
    else toast.error(t('profile.error'));
  };

  const handleLangChange = async (code: string) => {
    await setLanguage(code);
    toast.success(t('profile.saved'));
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">{t('profile.firstName')}</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            maxLength={50}
            aria-invalid={!!errors.first_name}
            className="rounded-xl"
          />
          {errors.first_name && <p className="text-xs text-destructive">{errors.first_name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">{t('profile.lastName')}</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            maxLength={50}
            aria-invalid={!!errors.last_name}
            className="rounded-xl"
          />
          {errors.last_name && <p className="text-xs text-destructive">{errors.last_name}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>{t('profile.nationality')}</Label>
        <CountrySelect value={nationality} onChange={setNationality} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">{t('profile.email')}</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="email" value={profile?.email ?? ''} readOnly disabled className="pl-10 rounded-xl" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>{t('profile.interfaceLanguage')}</Label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {LANGS.map((l) => {
            const active = l.code === language;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => handleLangChange(l.code)}
                aria-pressed={active}
                className={`flex flex-col items-center gap-1 rounded-xl border-2 p-2.5 text-xs font-semibold transition-all ${
                  active
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border bg-card hover:border-primary/40 text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="text-xl leading-none">{l.flag}</span>
                <span>{l.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button onClick={handleSave} disabled={!dirty || saving} className="rounded-xl">
          {saving ? '…' : t('profile.save')}
        </Button>
      </div>
    </div>
  );
}