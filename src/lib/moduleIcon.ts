import {
  Clock, Bus, MessageCircle,
  BookOpen, Briefcase, ShoppingBag, Globe,
  GraduationCap, Lightbulb, Smile, Sparkles, Compass,
  Map, Mic, PenTool, Coffee, Music,
  type LucideIcon,
} from 'lucide-react';

export type ModuleIconType =
  | { kind: 'emoji'; value: string }
  | { kind: 'lucide'; value: LucideIcon };

/**
 * Match heuristique entre le titre/theme d'un module et une icône.
 * Mix Lucide (standard) + emoji (modules "fun" : culture, voyage, social).
 * Insensible à la casse + accents. Fallback : Sparkles (Lucide).
 */
export function getModuleIcon(title: string, theme?: string): ModuleIconType {
  const text = `${title} ${theme ?? ''}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

  // ====== EMOJI : modules thématiques "fun" / culturels ======
  if (/(culture|france|tradition|fete|festival)/.test(text))            return { kind: 'emoji', value: '🇫🇷' };
  if (/(voyage|tourisme|decouvrir|geographi)/.test(text))               return { kind: 'emoji', value: '✈️' };
  if (/(cuisine|gastronomie|restaurant|repas|nourriture)/.test(text))   return { kind: 'emoji', value: '🍽️' };
  if (/(famille|enfant|parent)/.test(text))                             return { kind: 'emoji', value: '👨‍👩‍👧' };
  if (/(soiree|invitation|sortie|sociale)/.test(text))                  return { kind: 'emoji', value: '🎉' };
  if (/(sante|sport|alimentation|bien-?etre|corps)/.test(text))         return { kind: 'emoji', value: '💪' };
  if (/(saluer|salutations|premiers? pas|bonjour)/.test(text))          return { kind: 'emoji', value: '👋' };
  if (/(art|cinema|theatre|litterature)/.test(text))                    return { kind: 'emoji', value: '🎨' };
  if (/(mer|cote|plage|antibes)/.test(text))                            return { kind: 'emoji', value: '🌊' };

  // ====== LUCIDE : modules standard / technique ======
  if (/(quotidien|journee|routine|heure|temps)/.test(text))             return { kind: 'lucide', value: Clock };
  if (/(deplacer|transport|ville|direction|lieu)/.test(text))           return { kind: 'lucide', value: Bus };
  if (/(communiquer|telephone|email|reseau|message)/.test(text))        return { kind: 'lucide', value: MessageCircle };
  if (/(raconter|passe|memoire|histoire|souvenir)/.test(text))          return { kind: 'lucide', value: BookOpen };
  if (/(travail|profession|emploi|entretien|cv|bureau)/.test(text))     return { kind: 'lucide', value: Briefcase };
  if (/(achat|shopping|magasin|commerce)/.test(text))                   return { kind: 'lucide', value: ShoppingBag };
  if (/(monde|international|pays)/.test(text))                          return { kind: 'lucide', value: Globe };
  if (/(education|universit|etude|examen)/.test(text))                  return { kind: 'lucide', value: GraduationCap };
  if (/(idee|argument|opinion|debat|nuance)/.test(text))                return { kind: 'lucide', value: Lightbulb };
  if (/(emotion|sentiment|humour)/.test(text))                          return { kind: 'lucide', value: Smile };
  if (/(orientation|chemin|carrefour)/.test(text))                      return { kind: 'lucide', value: Compass };
  if (/(carte|plan|territoire)/.test(text))                             return { kind: 'lucide', value: Map };
  if (/(prononciation|son|phoneti|oral)/.test(text))                    return { kind: 'lucide', value: Mic };
  if (/(ecriture|redaction|texte|essai)/.test(text))                    return { kind: 'lucide', value: PenTool };
  if (/(cafe|pause|conversation)/.test(text))                           return { kind: 'lucide', value: Coffee };
  if (/(musique|chanson)/.test(text))                                   return { kind: 'lucide', value: Music };

  return { kind: 'lucide', value: Sparkles };
}
