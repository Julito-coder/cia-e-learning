import confetti from 'canvas-confetti';

const CIA_COLORS = [
  '#CCAE62', // cia-gold-400
  '#E8C97A', // cia-gold-300
  '#0A3D62', // cia-blue-700
  '#2E5984', // cia-blue-500
  '#B71540', // cia-red-500
  '#FFFFFF',
];

/**
 * Palette LevelUp — charte v2 §8 : « confettis bleus + blancs,
 * pas dorés en solide ». Réservée à `levelUpSequence`.
 */
const LEVELUP_BLUE_WHITE = [
  '#1E90FF', // cia-spark-mid
  '#5FB3FF', // cia-spark-light
  '#7CC3FF', // cia-spark-ember
  '#FFFFFF',
  '#0A3D62', // cia-spark-deep (accent)
];

/**
 * Palette legendary — réservée aux achievements rares (g-shine),
 * non au LevelUp lui-même.
 */
const LEGENDARY_PALETTE = ['#CCAE62', '#E8C97A', '#F2D89A', '#FFFFFF', '#FFE9A8'];

function reducedMotion(): boolean {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Burst central depuis le bas de l'écran — pour le moment "wow"
 * initial d'une célébration majeure.
 */
export function centerBurst(opts: { colors?: string[]; particleCount?: number } = {}) {
  if (reducedMotion()) return;
  const colors = opts.colors ?? CIA_COLORS;
  const particleCount = opts.particleCount ?? 80;
  confetti({
    particleCount,
    spread: 100,
    startVelocity: 55,
    origin: { x: 0.5, y: 0.85 },
    colors,
    scalar: 1.1,
    gravity: 1.05,
    decay: 0.92,
    ticks: 220,
    disableForReducedMotion: true,
  });
}

/**
 * Burst latéral gauche + droit — pour le second temps d'une
 * célébration (T+400ms après centerBurst).
 */
export function sideBursts(opts: { colors?: string[] } = {}) {
  if (reducedMotion()) return;
  const colors = opts.colors ?? CIA_COLORS;
  const common = {
    particleCount: 50,
    spread: 65,
    startVelocity: 45,
    colors,
    scalar: 1,
    gravity: 1,
    decay: 0.9,
    ticks: 200,
    disableForReducedMotion: true,
  };
  confetti({ ...common, angle: 60,  origin: { x: 0.05, y: 0.75 } });
  confetti({ ...common, angle: 120, origin: { x: 0.95, y: 0.75 } });
}

/**
 * Pluie continue de 2 secondes — pour la finale d'une célébration.
 * Lance 6 mini-bursts depuis le haut espacés de ~330ms.
 */
export function sustainedRain(opts: { colors?: string[]; duration?: number } = {}) {
  if (reducedMotion()) return;
  const colors = opts.colors ?? CIA_COLORS;
  const duration = opts.duration ?? 2000;
  const end = Date.now() + duration;

  const interval = window.setInterval(() => {
    if (Date.now() > end) {
      window.clearInterval(interval);
      return;
    }
    confetti({
      particleCount: 12,
      spread: 80,
      startVelocity: 20,
      origin: { x: Math.random(), y: -0.1 },
      colors,
      scalar: 0.9,
      gravity: 0.7,
      decay: 0.94,
      ticks: 300,
      disableForReducedMotion: true,
    });
  }, 330);
}

/**
 * Séquence complète pour un level-up : burst central → sides → rain.
 * Durée totale ~3 secondes. Charte v2 §8 : « bleus + blancs, pas dorés ».
 */
export function levelUpSequence() {
  if (reducedMotion()) return;
  centerBurst({ colors: LEVELUP_BLUE_WHITE, particleCount: 100 });
  window.setTimeout(() => sideBursts({ colors: LEVELUP_BLUE_WHITE }), 400);
  window.setTimeout(() => sustainedRain({ colors: LEVELUP_BLUE_WHITE, duration: 2000 }), 800);
}

/**
 * Séquence streak — orange/rouge feu de joie.
 */
export function streakBurst() {
  if (reducedMotion()) return;
  const fireColors = ['#FF6B35', '#F7931E', '#FFD700', '#B71540', '#FFA500'];
  centerBurst({ colors: fireColors, particleCount: 60 });
  window.setTimeout(() => sideBursts({ colors: fireColors }), 350);
}

/**
 * Mini-burst discret pour les achievements (toast bottom-right).
 */
export function achievementPing(
  originX = 0.92,
  originY = 0.85,
  rarity: 'common' | 'rare' | 'epic' | 'legendary' = 'common',
) {
  if (reducedMotion()) return;
  const palettes: Record<string, string[]> = {
    common:    ['#0A3D62', '#2E5984', '#FFFFFF'],
    rare:      ['#CCAE62', '#E8C97A', '#FFFFFF'],
    epic:      ['#1E90FF', '#5FB3FF', '#0A3D62', '#FFFFFF'], // cia-spark, pas violet brut
    legendary: LEGENDARY_PALETTE, // g-shine doré (charte §8)
  };
  confetti({
    particleCount: rarity === 'legendary' ? 50 : rarity === 'epic' ? 35 : 20,
    spread: 50,
    startVelocity: 30,
    origin: { x: originX, y: originY },
    colors: palettes[rarity],
    scalar: 0.8,
    gravity: 0.9,
    decay: 0.91,
    ticks: 180,
    disableForReducedMotion: true,
  });
}

/**
 * Cleanup tout confetti en cours (utile en navigation pendant une anim).
 */
export function clearConfetti() {
  confetti.reset();
}
