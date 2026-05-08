import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const COUNTRIES: { code: string; label: string; flag: string }[] = [
  { code: 'FR', label: 'France',          flag: '🇫🇷' },
  { code: 'BE', label: 'Belgique',        flag: '🇧🇪' },
  { code: 'CH', label: 'Suisse',          flag: '🇨🇭' },
  { code: 'CA', label: 'Canada',          flag: '🇨🇦' },
  { code: 'GB', label: 'Royaume-Uni',     flag: '🇬🇧' },
  { code: 'US', label: 'États-Unis',      flag: '🇺🇸' },
  { code: 'DE', label: 'Allemagne',       flag: '🇩🇪' },
  { code: 'ES', label: 'Espagne',         flag: '🇪🇸' },
  { code: 'IT', label: 'Italie',          flag: '🇮🇹' },
  { code: 'PT', label: 'Portugal',        flag: '🇵🇹' },
  { code: 'NL', label: 'Pays-Bas',        flag: '🇳🇱' },
  { code: 'PL', label: 'Pologne',         flag: '🇵🇱' },
  { code: 'RU', label: 'Russie',          flag: '🇷🇺' },
  { code: 'UA', label: 'Ukraine',         flag: '🇺🇦' },
  { code: 'TR', label: 'Turquie',         flag: '🇹🇷' },
  { code: 'MA', label: 'Maroc',           flag: '🇲🇦' },
  { code: 'DZ', label: 'Algérie',         flag: '🇩🇿' },
  { code: 'TN', label: 'Tunisie',         flag: '🇹🇳' },
  { code: 'SN', label: 'Sénégal',         flag: '🇸🇳' },
  { code: 'CN', label: 'Chine',           flag: '🇨🇳' },
  { code: 'JP', label: 'Japon',           flag: '🇯🇵' },
  { code: 'KR', label: 'Corée du Sud',    flag: '🇰🇷' },
  { code: 'IN', label: 'Inde',            flag: '🇮🇳' },
  { code: 'BR', label: 'Brésil',          flag: '🇧🇷' },
  { code: 'MX', label: 'Mexique',         flag: '🇲🇽' },
  { code: 'AR', label: 'Argentine',       flag: '🇦🇷' },
  { code: 'AU', label: 'Australie',       flag: '🇦🇺' },
  { code: 'OTHER', label: 'Autre',        flag: '🌍' },
];

interface Props {
  value: string | null;
  onChange: (v: string) => void;
  placeholder?: string;
}

export function CountrySelect({ value, onChange, placeholder = 'Sélectionner un pays' }: Props) {
  return (
    <Select value={value ?? undefined} onValueChange={onChange}>
      <SelectTrigger className="rounded-xl">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-h-[300px]">
        {COUNTRIES.map((c) => (
          <SelectItem key={c.code} value={c.code}>
            <span className="mr-2">{c.flag}</span>{c.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}