import type { CECRLevel } from './demo-courses';

export interface TestQuestion {
  id: number;
  level: CECRLevel;
  type: 'qcm' | 'fill-blank' | 'reorder';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export const testQuestions: TestQuestion[] = [
  // A1
  { id: 1, level: 'A1', type: 'qcm', question: 'Comment vous appelez-vous ?', options: ['Je m\'appelle Marie.', 'Je suis bien.', 'J\'ai 20.', 'Je vais à Paris.'], correctAnswer: 'Je m\'appelle Marie.', explanation: '"Je m\'appelle..." est utilisé pour donner son nom.' },
  { id: 2, level: 'A1', type: 'qcm', question: 'Quel est le pluriel de "le chat" ?', options: ['les chats', 'les chates', 'le chats', 'des chat'], correctAnswer: 'les chats', explanation: 'On ajoute un "s" et l\'article défini pluriel est "les".' },
  { id: 3, level: 'A1', type: 'fill-blank', question: 'Je ___ français. (être)', correctAnswer: 'suis', explanation: 'Conjugaison du verbe être : je suis.' },
  { id: 4, level: 'A1', type: 'qcm', question: 'Quelle heure est-il ? (14h30)', options: ['Il est deux heures et demie.', 'Il est quatorze heures.', 'Il est deux heures trente.', 'Les trois sont correctes.'], correctAnswer: 'Les trois sont correctes.', explanation: 'En français, il y a plusieurs façons d\'exprimer l\'heure.' },
  { id: 5, level: 'A1', type: 'qcm', question: '« Où habites-tu ? » — la réponse correcte :', options: ['J\'habite à Paris.', 'J\'habite en Paris.', 'J\'habite dans Paris.', 'J\'habite sur Paris.'], correctAnswer: 'J\'habite à Paris.', explanation: 'On utilise "à" devant les noms de ville.' },
  // A2
  { id: 6, level: 'A2', type: 'qcm', question: 'Hier, je ___ au cinéma.', options: ['suis allé', 'ai allé', 'vais aller', 'allais'], correctAnswer: 'suis allé', explanation: 'Le verbe "aller" se conjugue avec "être" au passé composé.' },
  { id: 7, level: 'A2', type: 'fill-blank', question: 'Elle ___ partie hier soir. (être)', correctAnswer: 'est', explanation: 'Partir se conjugue avec être au passé composé : elle est partie.' },
  { id: 8, level: 'A2', type: 'qcm', question: 'Quel pronom remplace "les livres" ?', options: ['les', 'leur', 'lui', 'en'], correctAnswer: 'les', explanation: '"Les" est le pronom COD pour remplacer un nom pluriel.' },
  { id: 9, level: 'A2', type: 'qcm', question: 'Je cherche ___ restaurant italien.', options: ['un', 'le', 'du', 'au'], correctAnswer: 'un', explanation: 'On utilise l\'article indéfini "un" quand on ne précise pas lequel.' },
  { id: 10, level: 'A2', type: 'fill-blank', question: 'Nous ___ mangé au restaurant hier. (avoir)', correctAnswer: 'avons', explanation: 'Conjugaison : nous avons mangé (passé composé avec avoir).' },
  // B1
  { id: 11, level: 'B1', type: 'qcm', question: 'Si j\'avais le temps, je ___ en vacances.', options: ['partirais', 'partirai', 'pars', 'suis parti'], correctAnswer: 'partirais', explanation: 'Condition irréelle au présent : si + imparfait → conditionnel présent.' },
  { id: 12, level: 'B1', type: 'qcm', question: 'Il faut que tu ___ tes devoirs.', options: ['fasses', 'fais', 'fait', 'fera'], correctAnswer: 'fasses', explanation: '"Il faut que" est suivi du subjonctif. Faire → que tu fasses.' },
  { id: 13, level: 'B1', type: 'fill-blank', question: 'Bien qu\'il ___ fatigué, il continue à travailler. (être, subj.)', correctAnswer: 'soit', explanation: '"Bien que" est toujours suivi du subjonctif.' },
  { id: 14, level: 'B1', type: 'qcm', question: 'Lequel de ces mots est un connecteur de conséquence ?', options: ['donc', 'pourtant', 'cependant', 'bien que'], correctAnswer: 'donc', explanation: '"Donc" exprime la conséquence. Les autres expriment l\'opposition.' },
  { id: 15, level: 'B1', type: 'qcm', question: '« Je ne sais pas ___ il viendra. »', options: ['si', 'que', 'quoi', 'dont'], correctAnswer: 'si', explanation: '"Si" introduit une interrogation indirecte totale.' },
  // B2
  { id: 16, level: 'B2', type: 'qcm', question: 'L\'entreprise ___ les employés travaillent est multinationale.', options: ['dans laquelle', 'que', 'qui', 'dont'], correctAnswer: 'dans laquelle', explanation: 'On travaille "dans" une entreprise → dans laquelle.' },
  { id: 17, level: 'B2', type: 'fill-blank', question: 'Quoiqu\'il en ___, nous devons agir. (être, subj.)', correctAnswer: 'soit', explanation: '"Quoiqu\'il en soit" est une expression figée au subjonctif.' },
  { id: 18, level: 'B2', type: 'qcm', question: 'Quel est le sens de « faire la grasse matinée » ?', options: ['Dormir tard le matin', 'Manger beaucoup au petit-déjeuner', 'Se lever très tôt', 'Faire du sport le matin'], correctAnswer: 'Dormir tard le matin', explanation: 'C\'est une expression idiomatique signifiant rester au lit longtemps.' },
  { id: 19, level: 'B2', type: 'qcm', question: 'Identifiez la phrase au passif :', options: ['Le gâteau a été mangé par les enfants.', 'Les enfants ont mangé le gâteau.', 'Les enfants mangeaient le gâteau.', 'Les enfants vont manger le gâteau.'], correctAnswer: 'Le gâteau a été mangé par les enfants.', explanation: 'Voix passive = sujet subit l\'action + "par" + complément d\'agent.' },
  { id: 20, level: 'B2', type: 'fill-blank', question: 'Il est parti sans ___ au revoir. (dire, inf.)', correctAnswer: 'dire', explanation: 'Après "sans", on utilise l\'infinitif.' },
  // C1
  { id: 21, level: 'C1', type: 'qcm', question: '« Nonobstant ses efforts » signifie :', options: ['Malgré ses efforts', 'Grâce à ses efforts', 'En raison de ses efforts', 'Suite à ses efforts'], correctAnswer: 'Malgré ses efforts', explanation: '"Nonobstant" est un synonyme soutenu de "malgré".' },
  { id: 22, level: 'C1', type: 'qcm', question: 'Quelle figure de style : « La Ville lumière accueille des millions de touristes » ?', options: ['Périphrase', 'Métaphore', 'Litote', 'Hyperbole'], correctAnswer: 'Périphrase', explanation: '"La Ville lumière" est une périphrase pour désigner Paris.' },
  { id: 23, level: 'C1', type: 'fill-blank', question: 'Dût-il y laisser sa fortune, il ___ ce projet. (mener, cond.)', correctAnswer: 'mènerait', explanation: 'Structure concessive littéraire : dût-il... il + conditionnel.' },
  { id: 24, level: 'C1', type: 'qcm', question: 'Quel registre : « Je m\'en bats les flancs de cette histoire » ?', options: ['Familier', 'Courant', 'Soutenu', 'Littéraire'], correctAnswer: 'Familier', explanation: 'Cette expression appartient au registre familier.' },
  // C2
  { id: 25, level: 'C2', type: 'qcm', question: 'Quel temps : « Il eût été préférable de partir plus tôt » ?', options: ['Conditionnel passé 2e forme', 'Subjonctif plus-que-parfait', 'Passé antérieur', 'Futur antérieur'], correctAnswer: 'Conditionnel passé 2e forme', explanation: 'Le conditionnel passé 2e forme utilise l\'auxiliaire au subj. imparfait.' },
  { id: 26, level: 'C2', type: 'fill-blank', question: 'Cet auteur, ___ les œuvres sont unanimement saluées, vient de recevoir le Goncourt. (pron. rel.)', correctAnswer: 'dont', explanation: '"Dont" remplace "de qui/duquel" — les œuvres de cet auteur.' },
  { id: 27, level: 'C2', type: 'qcm', question: 'Quel est le sens de « battre la chamade » ?', options: ['Avoir le cœur qui bat très fort', 'Abandonner un projet', 'Se battre courageusement', 'Jouer du tambour'], correctAnswer: 'Avoir le cœur qui bat très fort', explanation: 'Expression littéraire décrivant un cœur qui bat fort (émotion, peur).' },
];

export const levelThresholds: Record<CECRLevel, number> = {
  A1: 3,
  A2: 3,
  B1: 3,
  B2: 3,
  C1: 2,
  C2: 2,
};

export function calculateLevel(answers: Record<number, boolean>): { level: CECRLevel; scores: Record<CECRLevel, { correct: number; total: number }> } {
  const scores: Record<CECRLevel, { correct: number; total: number }> = {
    A1: { correct: 0, total: 0 },
    A2: { correct: 0, total: 0 },
    B1: { correct: 0, total: 0 },
    B2: { correct: 0, total: 0 },
    C1: { correct: 0, total: 0 },
    C2: { correct: 0, total: 0 },
  };

  testQuestions.forEach((q) => {
    scores[q.level].total++;
    if (answers[q.id]) scores[q.level].correct++;
  });

  const levels: CECRLevel[] = ['C2', 'C1', 'B2', 'B1', 'A2', 'A1'];
  for (const lvl of levels) {
    const s = scores[lvl];
    if (s.total > 0 && s.correct / s.total >= 0.6) return { level: lvl, scores };
  }
  return { level: 'A1', scores };
}
