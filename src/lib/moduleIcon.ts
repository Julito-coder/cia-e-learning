import {
  Clock, Bus, MessageCircle,
  BookOpen, Briefcase, ShoppingBag, Globe,
  GraduationCap, Lightbulb, Smile, Sparkles, Compass,
  Map, Mic, PenTool, Coffee, Music,
  Flag, Plane, UtensilsCrossed, Users, PartyPopper, HeartPulse,
  Hand, Palette, Waves,
  type LucideIcon,
} from 'lucide-react';

/**
 * `ModuleIconType` — iconographie propre Lucide uniquement (Parcours
 * simplify Bloc 3). Avant : mix Lucide + emoji (👋, 💪, 🇫🇷, etc.) qui
 * cassait la cohérence visuelle premium des nœuds.
 *
 * Plus de variant `emoji` : tous les modules retournent désormais une
 * `LucideIcon` cohérente avec le rest de l'UI (stroke 2.2, monochrome).
 */
export type ModuleIconType = LucideIcon;

/**
 * Match heuristique titre/theme du module → icône Lucide adaptée.
 * Insensible à la casse + accents. Fallback : `Sparkles`.
 */
export function getModuleIcon(title: string, theme?: string): ModuleIconType {
  const text = `${title} ${theme ?? ''}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

  // Modules thématiques (anciennement emoji) — remappés Lucide
  if (/(culture|france|tradition|fete|festival)/.test(text))            return Flag;
  if (/(voyage|tourisme|decouvrir|geographi)/.test(text))               return Plane;
  if (/(cuisine|gastronomie|restaurant|repas|nourriture)/.test(text))   return UtensilsCrossed;
  if (/(famille|enfant|parent)/.test(text))                             return Users;
  if (/(soiree|invitation|sortie|sociale)/.test(text))                  return PartyPopper;
  if (/(sante|sport|alimentation|bien-?etre|corps)/.test(text))         return HeartPulse;
  if (/(saluer|salutations|premiers? pas|bonjour)/.test(text))          return Hand;
  if (/(art|cinema|theatre|litterature)/.test(text))                    return Palette;
  if (/(mer|cote|plage|antibes)/.test(text))                            return Waves;

  // Modules standard / technique
  if (/(quotidien|journee|routine|heure|temps)/.test(text))             return Clock;
  if (/(deplacer|transport|ville|direction|lieu)/.test(text))           return Bus;
  if (/(communiquer|telephone|email|reseau|message)/.test(text))        return MessageCircle;
  if (/(raconter|passe|memoire|histoire|souvenir)/.test(text))          return BookOpen;
  if (/(travail|profession|emploi|entretien|cv|bureau)/.test(text))     return Briefcase;
  if (/(achat|shopping|magasin|commerce)/.test(text))                   return ShoppingBag;
  if (/(monde|international|pays)/.test(text))                          return Globe;
  if (/(education|universit|etude|examen)/.test(text))                  return GraduationCap;
  if (/(idee|argument|opinion|debat|nuance)/.test(text))                return Lightbulb;
  if (/(emotion|sentiment|humour)/.test(text))                          return Smile;
  if (/(orientation|chemin|carrefour)/.test(text))                      return Compass;
  if (/(carte|plan|territoire)/.test(text))                             return Map;
  if (/(prononciation|son|phoneti|oral)/.test(text))                    return Mic;
  if (/(ecriture|redaction|texte|essai)/.test(text))                    return PenTool;
  if (/(cafe|pause|conversation)/.test(text))                           return Coffee;
  if (/(musique|chanson)/.test(text))                                   return Music;

  return Sparkles;
}
