export interface GlossaryEntry {
  id: string;
  term: string;
  translation_en: string;
  translation_es?: string;
  definition_fr: string;
  example?: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: 'verbe' | 'nom' | 'adjectif' | 'adverbe' | 'expression' | 'grammaire';
}

export const glossary: GlossaryEntry[] = [
  // A1
  { id: 'a1-bonjour', term: 'bonjour', translation_en: 'hello', definition_fr: "Salutation utilisée le matin et l'après-midi.", example: "Bonjour, je m'appelle Sofia.", level: 'A1', category: 'expression' },
  { id: 'a1-merci', term: 'merci', translation_en: 'thank you', definition_fr: "Pour exprimer la gratitude.", example: "Merci pour votre aide.", level: 'A1', category: 'expression' },
  { id: 'a1-svp', term: "s'il vous plaît", translation_en: 'please', definition_fr: "Forme polie pour demander quelque chose.", example: "Un café, s'il vous plaît.", level: 'A1', category: 'expression' },
  { id: 'a1-oui', term: 'oui', translation_en: 'yes', definition_fr: "Marque l'affirmation.", example: "Oui, je comprends.", level: 'A1', category: 'adverbe' },
  { id: 'a1-non', term: 'non', translation_en: 'no', definition_fr: "Marque la négation.", example: "Non, je ne sais pas.", level: 'A1', category: 'adverbe' },
  { id: 'a1-maison', term: 'maison', translation_en: 'house', definition_fr: "Bâtiment d'habitation.", example: "Je rentre à la maison.", level: 'A1', category: 'nom' },
  { id: 'a1-eau', term: 'eau', translation_en: 'water', definition_fr: "Liquide transparent essentiel à la vie.", example: "Un verre d'eau, s'il vous plaît.", level: 'A1', category: 'nom' },
  { id: 'a1-aimer', term: 'aimer', translation_en: 'to love / to like', definition_fr: "Avoir de l'affection ou apprécier.", example: "J'aime le café.", level: 'A1', category: 'verbe' },
  { id: 'a1-grand', term: 'grand', translation_en: 'big / tall', definition_fr: "De taille importante.", example: "Une grande maison.", level: 'A1', category: 'adjectif' },
  { id: 'a1-petit', term: 'petit', translation_en: 'small / short', definition_fr: "De taille réduite.", example: "Un petit café.", level: 'A1', category: 'adjectif' },

  // A2
  { id: 'a2-prendre', term: 'prendre', translation_en: 'to take', definition_fr: "Saisir, attraper, ou consommer.", example: "Je prends le bus à 8h.", level: 'A2', category: 'verbe' },
  { id: 'a2-attendre', term: 'attendre', translation_en: 'to wait', definition_fr: "Patienter jusqu'à un événement.", example: "J'attends mes amis devant le café.", level: 'A2', category: 'verbe' },
  { id: 'a2-quartier', term: 'quartier', translation_en: 'neighborhood', definition_fr: "Partie d'une ville.", example: "J'habite dans un quartier calme.", level: 'A2', category: 'nom' },
  { id: 'a2-environ', term: 'environ', translation_en: 'about', definition_fr: "Approximativement.", example: "Il y a environ 10 personnes.", level: 'A2', category: 'adverbe' },
  { id: 'a2-vite', term: 'vite', translation_en: 'quickly', definition_fr: "Avec rapidité.", example: "Marche plus vite !", level: 'A2', category: 'adverbe' },
  { id: 'a2-souvent', term: 'souvent', translation_en: 'often', definition_fr: "À de nombreuses reprises.", example: "Je vais souvent au cinéma.", level: 'A2', category: 'adverbe' },
  { id: 'a2-rendez-vous', term: 'rendez-vous', translation_en: 'appointment', definition_fr: "Rencontre prévue.", example: "J'ai un rendez-vous demain.", level: 'A2', category: 'nom' },
  { id: 'a2-en-effet', term: 'en effet', translation_en: 'indeed', definition_fr: "Marque la confirmation.", example: "Tu as raison, en effet.", level: 'A2', category: 'expression' },
  { id: 'a2-cher', term: 'cher', translation_en: 'expensive / dear', definition_fr: "Coûteux ou affectionné.", example: "Ce restaurant est cher.", level: 'A2', category: 'adjectif' },
  { id: 'a2-facile', term: 'facile', translation_en: 'easy', definition_fr: "Sans difficulté.", example: "Ce travail est facile.", level: 'A2', category: 'adjectif' },

  // B1
  { id: 'b1-d-ailleurs', term: "d'ailleurs", translation_en: 'besides', definition_fr: "Pour ajouter une idée connexe.", example: "Il pleut. D'ailleurs, j'ai oublié mon parapluie.", level: 'B1', category: 'expression' },
  { id: 'b1-cependant', term: 'cependant', translation_en: 'however', definition_fr: "Marque une opposition.", example: "C'est cher, cependant ça vaut le coup.", level: 'B1', category: 'adverbe' },
  { id: 'b1-malgre', term: 'malgré', translation_en: 'despite', definition_fr: "En dépit de.", example: "Malgré la pluie, on est sortis.", level: 'B1', category: 'expression' },
  { id: 'b1-paraitre', term: 'paraître', translation_en: 'to seem', definition_fr: "Donner une apparence.", example: "Il paraît fatigué.", level: 'B1', category: 'verbe' },
  { id: 'b1-s-agir', term: "s'agir de", translation_en: 'to be about', definition_fr: "Avoir pour sujet (impersonnel).", example: "Il s'agit d'une question importante.", level: 'B1', category: 'verbe' },
  { id: 'b1-quotidien', term: 'quotidien', translation_en: 'daily', definition_fr: "Qui se passe chaque jour.", example: "Mes tâches quotidiennes.", level: 'B1', category: 'adjectif' },
  { id: 'b1-demarche', term: 'démarche', translation_en: 'approach / step', definition_fr: "Action ou méthode pour atteindre un but.", example: "Une démarche administrative.", level: 'B1', category: 'nom' },
  { id: 'b1-au-fur', term: 'au fur et à mesure', translation_en: 'as / gradually', definition_fr: "Progressivement, en parallèle.", example: "Je le comprends au fur et à mesure.", level: 'B1', category: 'expression' },
  { id: 'b1-soit', term: 'soit... soit', translation_en: 'either... or', definition_fr: "Marque une alternative.", example: "Soit on reste, soit on part.", level: 'B1', category: 'grammaire' },
  { id: 'b1-tandis-que', term: 'tandis que', translation_en: 'while / whereas', definition_fr: "Marque une opposition simultanée.", example: "Tandis que tu lis, je cuisine.", level: 'B1', category: 'expression' },

  // B2
  { id: 'b2-nuance', term: 'nuance', translation_en: 'nuance', definition_fr: "Différence subtile.", example: "Saisir les nuances d'un texte.", level: 'B2', category: 'nom' },
  { id: 'b2-aboutir', term: 'aboutir', translation_en: 'to lead to', definition_fr: "Arriver à un résultat.", example: "Le projet a abouti.", level: 'B2', category: 'verbe' },
  { id: 'b2-enjeu', term: 'enjeu', translation_en: 'stake / issue', definition_fr: "Ce qui est en jeu, importance.", example: "Un enjeu politique majeur.", level: 'B2', category: 'nom' },
  { id: 'b2-eprouver', term: 'éprouver', translation_en: 'to feel / to test', definition_fr: "Ressentir ou mettre à l'épreuve.", example: "J'éprouve de la joie.", level: 'B2', category: 'verbe' },
  { id: 'b2-pertinent', term: 'pertinent', translation_en: 'relevant', definition_fr: "Approprié, judicieux.", example: "Une remarque pertinente.", level: 'B2', category: 'adjectif' },
  { id: 'b2-toutefois', term: 'toutefois', translation_en: 'nevertheless', definition_fr: "Pourtant, néanmoins.", example: "C'est difficile, toutefois faisable.", level: 'B2', category: 'adverbe' },
  { id: 'b2-au-demeurant', term: 'au demeurant', translation_en: 'after all', definition_fr: "Au reste, à propos.", example: "Ce point, au demeurant secondaire.", level: 'B2', category: 'expression' },
  { id: 'b2-proner', term: 'prôner', translation_en: 'to advocate', definition_fr: "Recommander vivement.", example: "Il prône la prudence.", level: 'B2', category: 'verbe' },
  { id: 'b2-avere', term: 'avéré', translation_en: 'proven', definition_fr: "Confirmé comme vrai.", example: "Un fait avéré.", level: 'B2', category: 'adjectif' },
  { id: 'b2-controverse', term: 'controverse', translation_en: 'controversy', definition_fr: "Débat opposant des opinions.", example: "Une controverse scientifique.", level: 'B2', category: 'nom' },

  // C1
  { id: 'c1-imbriquer', term: 'imbriquer', translation_en: 'to interweave', definition_fr: "Disposer en chevauchement.", example: "Des problèmes imbriqués.", level: 'C1', category: 'verbe' },
  { id: 'c1-recuser', term: 'récuser', translation_en: 'to challenge', definition_fr: "Refuser, contester.", example: "Récuser un témoin.", level: 'C1', category: 'verbe' },
  { id: 'c1-imponderable', term: 'impondérable', translation_en: 'imponderable', definition_fr: "Imprévisible, difficile à mesurer.", example: "Tenir compte des impondérables.", level: 'C1', category: 'adjectif' },
  { id: 'c1-conjoncture', term: 'conjoncture', translation_en: 'situation', definition_fr: "Ensemble des circonstances actuelles.", example: "Une conjoncture économique difficile.", level: 'C1', category: 'nom' },
  { id: 'c1-eu-egard', term: 'eu égard à', translation_en: 'in view of', definition_fr: "En considération de.", example: "Eu égard à son expérience.", level: 'C1', category: 'expression' },
  { id: 'c1-exhausser', term: 'exhausser', translation_en: 'to raise', definition_fr: "Élever, rehausser.", example: "Exhausser le débat.", level: 'C1', category: 'verbe' },
  { id: 'c1-jadis', term: 'jadis', translation_en: 'formerly', definition_fr: "Autrefois, dans un passé lointain.", example: "Jadis, il y avait un château ici.", level: 'C1', category: 'adverbe' },
  { id: 'c1-pregnance', term: 'prégnance', translation_en: 'pregnance', definition_fr: "Force d'imposition à l'esprit.", example: "La prégnance d'un souvenir.", level: 'C1', category: 'nom' },
  { id: 'c1-truchement', term: 'truchement', translation_en: 'intermediary', definition_fr: "Intermédiaire, moyen.", example: "Par le truchement d'un ami.", level: 'C1', category: 'nom' },
  { id: 'c1-ceans', term: 'céans', translation_en: 'herein', definition_fr: "Ici (vieilli/littéraire).", example: "Le maître de céans.", level: 'C1', category: 'adverbe' },

  // C2
  { id: 'c2-circonvoluer', term: 'circonvoluer', translation_en: 'to circumvolve', definition_fr: "Tourner autour, contourner.", example: "Circonvoluer un argument.", level: 'C2', category: 'verbe' },
  { id: 'c2-ataraxie', term: 'ataraxie', translation_en: 'ataraxia', definition_fr: "Tranquillité absolue de l'âme.", example: "L'ataraxie des stoïciens.", level: 'C2', category: 'nom' },
  { id: 'c2-pericliter', term: 'péricliter', translation_en: 'to decline', definition_fr: "Aller à sa perte, décliner.", example: "Une entreprise qui périclite.", level: 'C2', category: 'verbe' },
  { id: 'c2-acrimonie', term: 'acrimonie', translation_en: 'acrimony', definition_fr: "Aigreur dans le ton.", example: "Répondre avec acrimonie.", level: 'C2', category: 'nom' },
  { id: 'c2-exegese', term: 'exégèse', translation_en: 'exegesis', definition_fr: "Interprétation détaillée d'un texte.", example: "L'exégèse d'un poème.", level: 'C2', category: 'nom' },
  { id: 'c2-zelateur', term: 'zélateur', translation_en: 'zealot', definition_fr: "Défenseur ardent d'une cause.", example: "Un zélateur de la cause.", level: 'C2', category: 'nom' },
  { id: 'c2-velleite', term: 'velléité', translation_en: 'whim', definition_fr: "Volonté faible ou passagère.", example: "Une velléité de réforme.", level: 'C2', category: 'nom' },
  { id: 'c2-persiflage', term: 'persiflage', translation_en: 'persiflage', definition_fr: "Moquerie subtile, ironie.", example: "Un ton plein de persiflage.", level: 'C2', category: 'nom' },
  { id: 'c2-thuriferaire', term: 'thuriféraire', translation_en: 'flatterer', definition_fr: "Flatteur excessif.", example: "Les thuriféraires du pouvoir.", level: 'C2', category: 'nom' },
  { id: 'c2-incommensurable', term: 'incommensurable', translation_en: 'incommensurable', definition_fr: "Qui ne peut être mesuré.", example: "Une joie incommensurable.", level: 'C2', category: 'adjectif' },
];
