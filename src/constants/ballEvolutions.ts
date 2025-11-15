import type { Balls, StarterBalls } from '../types/balls.ts';
import { ballInformation } from './ballInformation.ts';

export const advancedEvolutions: [Balls, Balls, Balls][] = [
  ['bomb', 'poison', 'nuclearBomb'],
  ['incubus', 'succubus', 'satan'],
  ['dark', 'sun', 'blackHole'],
];

export const multipleAdvancedEvolutions: [Balls, Balls, Balls, Balls][] = [
  ['vampireLord', 'mosquitoKing', 'spiderQueen', 'nosferatu'],
];

export const basicEvolutions: [StarterBalls, StarterBalls, Balls][] = [
  ['bleed', 'broodMother', 'leech'],
  ['bleed', 'charm', 'berserk'],
  ['bleed', 'dark', 'sacrifice'],
  ['bleed', 'iron', 'hemorrhage'],
  ['bleed', 'poison', 'virus'],
  ['bleed', 'vampire', 'vampireLord'],
  ['broodMother', 'cell', 'maggot'],
  ['broodMother', 'eggSac', 'spiderQueen'],
  ['broodMother', 'vampire', 'mosquitoKing'],
  ['burn', 'charm', 'berserk'],
  ['burn', 'earthquake', 'magma'],
  ['burn', 'freeze', 'frozenFlame'],
  ['burn', 'iron', 'bomb'],
  ['burn', 'light', 'sun'],
  ['burn', 'wind', 'inferno'],
  ['cell', 'earthquake', 'overgrowth'],
  ['cell', 'eggSac', 'voluptuousEggSac'],
  ['cell', 'laserHorizontal', 'radiationBeam'],
  ['cell', 'laserVertical', 'radiationBeam'],
  ['cell', 'poison', 'virus'],
  ['charm', 'dark', 'incubus'],
  ['charm', 'light', 'lovestruck'],
  ['charm', 'lightning', 'lovestruck'],
  ['charm', 'vampire', 'succubus'],
  ['dark', 'ghost', 'phantom'],
  ['dark', 'iron', 'darkAssassin'],
  ['dark', 'light', 'flicker'],
  ['dark', 'vampire', 'vampireLord'],
  ['dark', 'wind', 'noxious'],
  ['earthquake', 'freeze', 'glacier'],
  ['earthquake', 'poison', 'swamp'],
  ['earthquake', 'wind', 'sandstorm'],
  ['eggSac', 'iron', 'shotgun'],
  ['eggSac', 'vampire', 'mosquitoSwarm'],
  ['freeze', 'ghost', 'wraith'],
  ['freeze', 'laserHorizontal', 'freezeRay'],
  ['freeze', 'laserVertical', 'freezeRay'],
  ['freeze', 'lightning', 'blizzard'],
  ['freeze', 'wind', 'blizzard'],
  ['ghost', 'iron', 'darkAssassin'],
  ['ghost', 'poison', 'virus'],
  ['ghost', 'vampire', 'soulSucker'],
  ['iron', 'lightning', 'lightningRod'],
  ['laserHorizontal', 'laserVertical', 'holyLaser'],
  ['laserHorizontal', 'poison', 'radiationBeam'],
  ['laserHorizontal', 'light', 'laserBeam'],
  ['laserVertical', 'poison', 'radiationBeam'],
  ['laserVertical', 'light', 'laserBeam'],
  ['light', 'lightning', 'flash'],
  ['lightning', 'wind', 'storm'],
  ['poison', 'wind', 'noxious'],
];

export function getEvolutionRecipes(ball: Balls): string | null {
  const matches = basicEvolutions
    .filter(([, , result]) => result === ball)
    .map(([ball1, ball2]) => `${ballInformation[ball1].name} x ${ballInformation[ball2].name}`);

  if (matches.length === 0) return null;

  // Condense Laser (Horizontal) and Laser (Vertical) recipes into Laser (Either)
  const isLaser = (s: string) =>
    /Laser\s*\((Horizontal|Vertical)\)/i.test(s);

  const normalizeLaser = (s: string) =>
    s.replace(/Laser\s*\((Horizontal|Vertical)\)/gi, "Laser (Either)");

  const condensed: string[] = [];

  for (const match of matches) {
    const [leftBall, rightBall] = match.split(" x ");

    if (isLaser(leftBall) && isLaser(rightBall)) {
      condensed.push(match);
      continue;
    }

    const normLeftBall = isLaser(leftBall) ? normalizeLaser(leftBall) : leftBall;
    const normRightBall = isLaser(rightBall) ? normalizeLaser(rightBall) : rightBall;

    condensed.push(`${normLeftBall} x ${normRightBall}`);
  }

  return [...new Set(condensed)].join(" / ");
}

function buildEvolutionMap() {
  const evolutionMap: Partial<Record<Balls, Partial<Record<Balls, Record<'evolution', Balls>>>>> =
    {};

  const allEvolutions = [...basicEvolutions, ...advancedEvolutions];

  for (const [ball1, ball2, result] of allEvolutions) {
    if (!evolutionMap[ball1]) {
      evolutionMap[ball1] = {};
    }
    evolutionMap[ball1]![ball2] = { evolution: result };

    if (!evolutionMap[ball2]) {
      evolutionMap[ball2] = {};
    }
    evolutionMap[ball2]![ball1] = { evolution: result };
  }

  return evolutionMap;
}

export const evolutions = buildEvolutionMap() satisfies Partial<
  Record<Balls, Partial<Record<Balls, Record<'evolution', Balls>>>>
>;
