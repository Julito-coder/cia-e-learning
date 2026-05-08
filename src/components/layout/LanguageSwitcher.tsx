import { useTranslation } from 'react-i18next';
import { Check, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'es', label: 'Español',  flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', label: 'Русский',  flag: '🇷🇺' },
];

const LS_KEY = 'cia-interface-lang';

export function LanguageSwitcher({ compact = true }: { compact?: boolean }) {
  const { i18n } = useTranslation();
  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    try { localStorage.setItem(LS_KEY, code); } catch {}
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 font-medium rounded-xl">
          <Languages className="h-4 w-4" />
          {compact ? <span className="uppercase">{current.code}</span> : <span>{current.flag} {current.label}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px] rounded-xl">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => handleChange(lang.code)} className="gap-2 rounded-lg">
            <span>{lang.flag}</span>
            <span className="flex-1">{lang.label}</span>
            {lang.code === current.code && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
