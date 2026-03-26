import type { CECRLevel } from './demo-courses';

export interface TestQuestion {
  id: number;
  level: CECRLevel;
  type: 'qcm' | 'fill-blank';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

// Full question bank — ~60 questions across all levels
const questionBank: TestQuestion[] = [
  // ===== A1 (12 questions) =====
  { id: 1, level: 'A1', type: 'qcm', question: 'Comment vous appelez-vous ?', options: ['Je m\'appelle Marie.', 'Je suis bien.', 'J\'ai 20.', 'Je vais à Paris.'], correctAnswer: 'Je m\'appelle Marie.', explanation: '"Je m\'appelle..." est utilisé pour donner son nom.' },
  { id: 2, level: 'A1', type: 'qcm', question: 'Quel est le pluriel de "le chat" ?', options: ['les chats', 'les chates', 'le chats', 'des chat'], correctAnswer: 'les chats', explanation: 'On ajoute un "s" et l\'article défini pluriel est "les".' },
  { id: 3, level: 'A1', type: 'fill-blank', question: 'Je ___ français. (être)', correctAnswer: 'suis', explanation: 'Conjugaison du verbe être : je suis.' },
  { id: 4, level: 'A1', type: 'qcm', question: 'Quelle heure est-il ? (14h30)', options: ['Il est deux heures et demie.', 'Il est quatorze heures.', 'Il est deux heures trente.', 'Les trois sont correctes.'], correctAnswer: 'Les trois sont correctes.', explanation: 'En français, il y a plusieurs façons d\'exprimer l\'heure.' },
  { id: 5, level: 'A1', type: 'qcm', question: '« Où habites-tu ? » — la réponse correcte :', options: ['J\'habite à Paris.', 'J\'habite en Paris.', 'J\'habite dans Paris.', 'J\'habite sur Paris.'], correctAnswer: 'J\'habite à Paris.', explanation: 'On utilise "à" devant les noms de ville.' },
  { id: 6, level: 'A1', type: 'fill-blank', question: 'Elle ___ une étudiante. (être)', correctAnswer: 'est', explanation: 'Conjugaison : elle est.' },
  { id: 7, level: 'A1', type: 'qcm', question: 'Quel article pour "table" (féminin) ?', options: ['la table', 'le table', 'un table', 'les table'], correctAnswer: 'la table', explanation: '"Table" est féminin, on utilise "la".' },
  { id: 8, level: 'A1', type: 'qcm', question: 'Comment dit-on "Good morning" en français ?', options: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Salut'], correctAnswer: 'Bonjour', explanation: '"Bonjour" signifie "Good morning/Hello".' },
  { id: 9, level: 'A1', type: 'fill-blank', question: 'Nous ___ contents. (être)', correctAnswer: 'sommes', explanation: 'Conjugaison : nous sommes.' },
  { id: 10, level: 'A1', type: 'qcm', question: 'Quel est le féminin de "grand" ?', options: ['grande', 'grende', 'grands', 'granda'], correctAnswer: 'grande', explanation: 'On ajoute un "e" pour le féminin : grand → grande.' },
  { id: 11, level: 'A1', type: 'qcm', question: 'Combien font deux plus trois ?', options: ['cinq', 'quatre', 'six', 'sept'], correctAnswer: 'cinq', explanation: '2 + 3 = 5 → cinq.' },
  { id: 12, level: 'A1', type: 'fill-blank', question: 'Ils ___ à l\'école. (aller)', correctAnswer: 'vont', explanation: 'Conjugaison du verbe aller : ils vont.' },

  // ===== A2 (12 questions) =====
  { id: 13, level: 'A2', type: 'qcm', question: 'Hier, je ___ au cinéma.', options: ['suis allé', 'ai allé', 'vais aller', 'allais'], correctAnswer: 'suis allé', explanation: 'Le verbe "aller" se conjugue avec "être" au passé composé.' },
  { id: 14, level: 'A2', type: 'fill-blank', question: 'Elle ___ partie hier soir. (être)', correctAnswer: 'est', explanation: 'Partir se conjugue avec être au passé composé : elle est partie.' },
  { id: 15, level: 'A2', type: 'qcm', question: 'Quel pronom remplace "les livres" ?', options: ['les', 'leur', 'lui', 'en'], correctAnswer: 'les', explanation: '"Les" est le pronom COD pour remplacer un nom pluriel.' },
  { id: 16, level: 'A2', type: 'qcm', question: 'Je cherche ___ restaurant italien.', options: ['un', 'le', 'du', 'au'], correctAnswer: 'un', explanation: 'On utilise l\'article indéfini "un" quand on ne précise pas lequel.' },
  { id: 17, level: 'A2', type: 'fill-blank', question: 'Nous ___ mangé au restaurant hier. (avoir)', correctAnswer: 'avons', explanation: 'Conjugaison : nous avons mangé (passé composé avec avoir).' },
  { id: 18, level: 'A2', type: 'qcm', question: 'Il fait ___ aujourd\'hui. (météo, soleil)', options: ['beau', 'bon', 'bien', 'chaud'], correctAnswer: 'beau', explanation: '"Il fait beau" décrit un temps ensoleillé.' },
  { id: 19, level: 'A2', type: 'qcm', question: 'Je vais ___ supermarché.', options: ['au', 'à le', 'dans le', 'en'], correctAnswer: 'au', explanation: '"Au" = à + le (contraction obligatoire).' },
  { id: 20, level: 'A2', type: 'fill-blank', question: 'Tu ___ acheté du pain ? (avoir)', correctAnswer: 'as', explanation: 'Conjugaison : tu as acheté.' },
  { id: 21, level: 'A2', type: 'qcm', question: '« Je me lève » est un verbe :', options: ['pronominal', 'transitif', 'intransitif', 'impersonnel'], correctAnswer: 'pronominal', explanation: 'Un verbe pronominal se conjugue avec un pronom réfléchi (me, te, se...).' },
  { id: 22, level: 'A2', type: 'qcm', question: 'Elle est plus grande ___ son frère.', options: ['que', 'de', 'comme', 'à'], correctAnswer: 'que', explanation: 'Le comparatif se construit avec "plus... que".' },
  { id: 23, level: 'A2', type: 'fill-blank', question: 'Elles ___ allées au marché. (être)', correctAnswer: 'sont', explanation: 'Aller se conjugue avec être : elles sont allées.' },
  { id: 24, level: 'A2', type: 'qcm', question: 'Quel est le contraire de "devant" ?', options: ['derrière', 'dessous', 'dessus', 'dehors'], correctAnswer: 'derrière', explanation: 'Devant ↔ derrière.' },

  // ===== B1 (10 questions) =====
  { id: 25, level: 'B1', type: 'qcm', question: 'Si j\'avais le temps, je ___ en vacances.', options: ['partirais', 'partirai', 'pars', 'suis parti'], correctAnswer: 'partirais', explanation: 'Condition irréelle au présent : si + imparfait → conditionnel présent.' },
  { id: 26, level: 'B1', type: 'qcm', question: 'Il faut que tu ___ tes devoirs.', options: ['fasses', 'fais', 'fait', 'fera'], correctAnswer: 'fasses', explanation: '"Il faut que" est suivi du subjonctif. Faire → que tu fasses.' },
  { id: 27, level: 'B1', type: 'fill-blank', question: 'Bien qu\'il ___ fatigué, il continue à travailler. (être, subj.)', correctAnswer: 'soit', explanation: '"Bien que" est toujours suivi du subjonctif.' },
  { id: 28, level: 'B1', type: 'qcm', question: 'Lequel de ces mots est un connecteur de conséquence ?', options: ['donc', 'pourtant', 'cependant', 'bien que'], correctAnswer: 'donc', explanation: '"Donc" exprime la conséquence. Les autres expriment l\'opposition.' },
  { id: 29, level: 'B1', type: 'qcm', question: '« Je ne sais pas ___ il viendra. »', options: ['si', 'que', 'quoi', 'dont'], correctAnswer: 'si', explanation: '"Si" introduit une interrogation indirecte totale.' },
  { id: 30, level: 'B1', type: 'fill-blank', question: 'Il m\'a demandé ___ je voulais manger. (pron. interr.)', correctAnswer: 'ce que', explanation: '"Ce que" introduit une interrogation indirecte partielle portant sur le COD.' },
  { id: 31, level: 'B1', type: 'qcm', question: 'Je travaille ___ gagner ma vie.', options: ['pour', 'par', 'à', 'de'], correctAnswer: 'pour', explanation: '"Pour" + infinitif exprime le but.' },
  { id: 32, level: 'B1', type: 'qcm', question: '« Avoir le cafard » signifie :', options: ['Être triste', 'Avoir peur', 'Être surpris', 'Être en colère'], correctAnswer: 'Être triste', explanation: '"Avoir le cafard" est une expression signifiant être déprimé.' },
  { id: 33, level: 'B1', type: 'fill-blank', question: 'C\'est le livre ___ je t\'ai parlé. (pron. rel.)', correctAnswer: 'dont', explanation: 'Parler de → dont (pronom relatif pour compléments en "de").' },
  { id: 34, level: 'B1', type: 'qcm', question: 'Pendant que je ___, il a commencé à pleuvoir.', options: ['dormais', 'dormi', 'dors', 'dormirai'], correctAnswer: 'dormais', explanation: '"Pendant que" + action en cours dans le passé → imparfait.' },

  // ===== B2 (10 questions) =====
  { id: 35, level: 'B2', type: 'qcm', question: 'L\'entreprise ___ les employés travaillent est multinationale.', options: ['dans laquelle', 'que', 'qui', 'dont'], correctAnswer: 'dans laquelle', explanation: 'On travaille "dans" une entreprise → dans laquelle.' },
  { id: 36, level: 'B2', type: 'fill-blank', question: 'Quoiqu\'il en ___, nous devons agir. (être, subj.)', correctAnswer: 'soit', explanation: '"Quoiqu\'il en soit" est une expression figée au subjonctif.' },
  { id: 37, level: 'B2', type: 'qcm', question: 'Quel est le sens de « faire la grasse matinée » ?', options: ['Dormir tard le matin', 'Manger beaucoup au petit-déjeuner', 'Se lever très tôt', 'Faire du sport le matin'], correctAnswer: 'Dormir tard le matin', explanation: 'C\'est une expression idiomatique signifiant rester au lit longtemps.' },
  { id: 38, level: 'B2', type: 'qcm', question: 'Identifiez la phrase au passif :', options: ['Le gâteau a été mangé par les enfants.', 'Les enfants ont mangé le gâteau.', 'Les enfants mangeaient le gâteau.', 'Les enfants vont manger le gâteau.'], correctAnswer: 'Le gâteau a été mangé par les enfants.', explanation: 'Voix passive = sujet subit l\'action + "par" + complément d\'agent.' },
  { id: 39, level: 'B2', type: 'fill-blank', question: 'Il est parti sans ___ au revoir. (dire, inf.)', correctAnswer: 'dire', explanation: 'Après "sans", on utilise l\'infinitif.' },
  { id: 40, level: 'B2', type: 'qcm', question: '« En l\'occurrence » signifie :', options: ['Dans ce cas précis', 'En général', 'Par conséquent', 'Au contraire'], correctAnswer: 'Dans ce cas précis', explanation: '"En l\'occurrence" = dans le cas présent, dans cette situation.' },
  { id: 41, level: 'B2', type: 'qcm', question: 'Choisissez la bonne concordance des temps : « Il a dit qu\'il ___ demain. »', options: ['viendrait', 'viendra', 'vienne', 'venait'], correctAnswer: 'viendrait', explanation: 'Discours indirect au passé : futur → conditionnel présent.' },
  { id: 42, level: 'B2', type: 'fill-blank', question: 'À peine était-il arrivé ___ le téléphone sonna. (conj.)', correctAnswer: 'que', explanation: '"À peine... que" est une structure d\'antériorité immédiate.' },
  { id: 43, level: 'B2', type: 'qcm', question: 'Quel mot signifie "rendre quelque chose plus clair" ?', options: ['Élucider', 'Éluder', 'Élaborer', 'Élaguer'], correctAnswer: 'Élucider', explanation: '"Élucider" = rendre clair, expliquer. "Éluder" = éviter.' },
  { id: 44, level: 'B2', type: 'qcm', question: '« Force est de constater que... » est suivi :', options: ['de l\'indicatif', 'du subjonctif', 'de l\'infinitif', 'du conditionnel'], correctAnswer: 'de l\'indicatif', explanation: '"Force est de constater que" introduit un fait → indicatif.' },

  // ===== C1 (8 questions) =====
  { id: 45, level: 'C1', type: 'qcm', question: '« Nonobstant ses efforts » signifie :', options: ['Malgré ses efforts', 'Grâce à ses efforts', 'En raison de ses efforts', 'Suite à ses efforts'], correctAnswer: 'Malgré ses efforts', explanation: '"Nonobstant" est un synonyme soutenu de "malgré".' },
  { id: 46, level: 'C1', type: 'qcm', question: 'Quelle figure de style : « La Ville lumière accueille des millions de touristes » ?', options: ['Périphrase', 'Métaphore', 'Litote', 'Hyperbole'], correctAnswer: 'Périphrase', explanation: '"La Ville lumière" est une périphrase pour désigner Paris.' },
  { id: 47, level: 'C1', type: 'fill-blank', question: 'Dût-il y laisser sa fortune, il ___ ce projet. (mener, cond.)', correctAnswer: 'mènerait', explanation: 'Structure concessive littéraire : dût-il... il + conditionnel.' },
  { id: 48, level: 'C1', type: 'qcm', question: 'Quel registre : « Je m\'en bats les flancs de cette histoire » ?', options: ['Familier', 'Courant', 'Soutenu', 'Littéraire'], correctAnswer: 'Familier', explanation: 'Cette expression appartient au registre familier.' },
  { id: 49, level: 'C1', type: 'qcm', question: '« Nul n\'est censé ignorer la loi. » Le mot « censé » signifie :', options: ['Supposé', 'Sensé', 'Obligé', 'Capable'], correctAnswer: 'Supposé', explanation: '"Censé" = supposé. Attention : "sensé" = raisonnable.' },
  { id: 50, level: 'C1', type: 'fill-blank', question: 'Il s\'est ___ de répondre. (abstenir, p.p.)', correctAnswer: 'abstenu', explanation: 'S\'abstenir → il s\'est abstenu (participe passé).' },
  { id: 51, level: 'C1', type: 'qcm', question: '« Être de mauvaise foi » signifie :', options: ['Être malhonnête dans ses arguments', 'Avoir de mauvaises croyances', 'Manquer de confiance', 'Être superstitieux'], correctAnswer: 'Être malhonnête dans ses arguments', explanation: '"Être de mauvaise foi" = manquer de sincérité dans ses propos.' },
  { id: 52, level: 'C1', type: 'qcm', question: '« Toujours est-il que » introduit :', options: ['Une conclusion malgré les doutes', 'Une hypothèse', 'Une cause', 'Une comparaison'], correctAnswer: 'Une conclusion malgré les doutes', explanation: '"Toujours est-il que" = quoi qu\'il en soit, le fait demeure que.' },

  // ===== C2 (8 questions) =====
  { id: 53, level: 'C2', type: 'qcm', question: 'Quel temps : « Il eût été préférable de partir plus tôt » ?', options: ['Conditionnel passé 2e forme', 'Subjonctif plus-que-parfait', 'Passé antérieur', 'Futur antérieur'], correctAnswer: 'Conditionnel passé 2e forme', explanation: 'Le conditionnel passé 2e forme utilise l\'auxiliaire au subj. imparfait.' },
  { id: 54, level: 'C2', type: 'fill-blank', question: 'Cet auteur, ___ les œuvres sont unanimement saluées, vient de recevoir le Goncourt. (pron. rel.)', correctAnswer: 'dont', explanation: '"Dont" remplace "de qui/duquel" — les œuvres de cet auteur.' },
  { id: 55, level: 'C2', type: 'qcm', question: 'Quel est le sens de « battre la chamade » ?', options: ['Avoir le cœur qui bat très fort', 'Abandonner un projet', 'Se battre courageusement', 'Jouer du tambour'], correctAnswer: 'Avoir le cœur qui bat très fort', explanation: 'Expression littéraire décrivant un cœur qui bat fort (émotion, peur).' },
  { id: 56, level: 'C2', type: 'qcm', question: '« Procrastiner » est synonyme de :', options: ['Remettre à plus tard', 'Anticiper', 'Accélérer', 'Supprimer'], correctAnswer: 'Remettre à plus tard', explanation: 'Procrastiner = reporter, différer une action.' },
  { id: 57, level: 'C2', type: 'fill-blank', question: 'Quelque brillants qu\'ils ___, ils n\'ont pas réussi. (être, subj.)', correctAnswer: 'soient', explanation: '"Quelque + adj. + que" → subjonctif (concession littéraire).' },
  { id: 58, level: 'C2', type: 'qcm', question: '« Un oxymore » est :', options: ['L\'alliance de deux mots contradictoires', 'Une exagération', 'Une comparaison implicite', 'Un mot inventé'], correctAnswer: 'L\'alliance de deux mots contradictoires', explanation: 'Oxymore : rapprochement de termes opposés (ex. "obscure clarté").' },
  { id: 59, level: 'C2', type: 'qcm', question: '« Pléonasme » dans : « monter en haut ». Le terme redondant est :', options: ['en haut', 'monter', 'Les deux', 'Aucun'], correctAnswer: 'en haut', explanation: '"Monter" implique déjà la direction vers le haut.' },
  { id: 60, level: 'C2', type: 'fill-blank', question: 'Fût-ce au prix de sa vie, il ___ résisté. (avoir, cond. passé)', correctAnswer: 'aurait', explanation: 'Structure concessive : fût-ce... il aurait + p.p. (conditionnel passé).' },
];

/**
 * Selects a random set of questions ensuring coverage across all levels.
 * @param questionsPerLevel Number of questions to pick per level (default 4 for A1-B2, 3 for C1-C2)
 */
export function getRandomTest(): TestQuestion[] {
  const levels: CECRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const perLevel: Record<CECRLevel, number> = { A1: 4, A2: 4, B1: 4, B2: 4, C1: 3, C2: 3 };
  
  const selected: TestQuestion[] = [];
  
  for (const level of levels) {
    const pool = questionBank.filter(q => q.level === level);
    const count = Math.min(perLevel[level], pool.length);
    // Shuffle and pick
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    selected.push(...shuffled.slice(0, count));
  }
  
  // Re-number the IDs sequentially for the test instance
  return selected.map((q, i) => ({ ...q, id: i + 1 }));
}

// Keep backward compat
export const testQuestions = questionBank;

export const levelThresholds: Record<CECRLevel, number> = {
  A1: 3, A2: 3, B1: 3, B2: 3, C1: 2, C2: 2,
};

export function calculateLevel(
  answers: Record<number, boolean>,
  questions: TestQuestion[]
): { level: CECRLevel; scores: Record<CECRLevel, { correct: number; total: number }> } {
  const scores: Record<CECRLevel, { correct: number; total: number }> = {
    A1: { correct: 0, total: 0 },
    A2: { correct: 0, total: 0 },
    B1: { correct: 0, total: 0 },
    B2: { correct: 0, total: 0 },
    C1: { correct: 0, total: 0 },
    C2: { correct: 0, total: 0 },
  };

  questions.forEach((q) => {
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
