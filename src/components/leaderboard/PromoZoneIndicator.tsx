import { ArrowUp, ArrowDown, ShieldCheck } from 'lucide-react';

type Zone = 'promo' | 'safe' | 'releg';

const CONFIG: Record<Zone, { icon: typeof ArrowUp; label: string; cls: string }> = {
  promo: { icon: ArrowUp, label: 'ZONE PROMOTION', cls: 'text-success-600' },
  releg: { icon: ArrowDown, label: 'ZONE RELÉGATION', cls: 'text-destructive' },
  safe:  { icon: ShieldCheck, label: 'ZONE SAFE',     cls: 'text-muted-foreground' },
};

export function PromoZoneIndicator({ zone }: { zone: Zone }) {
  const c = CONFIG[zone];
  const Icon = c.icon;
  return (
    <div className="flex items-center gap-2 px-2 pt-3 pb-1">
      <Icon className={`h-3.5 w-3.5 ${c.cls} ${zone !== 'safe' ? 'animate-pulse' : ''}`} />
      <span className={`text-[11px] font-extrabold tracking-wider ${c.cls}`}>{c.label}</span>
      {zone !== 'safe' && (
        <span className={`flex-1 h-px bg-gradient-to-r ${zone === 'promo' ? 'from-success-500/40' : 'from-destructive/40'} to-transparent`} />
      )}
    </div>
  );
}