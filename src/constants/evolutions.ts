import type { Balls } from '../types/ballIcons.js';

export const advancedEvolutions: ([Balls, Balls, Balls] | [Balls, Balls, Balls, Balls])[] = [
  ['bomb', 'poison', 'nuclearBomb'],
  ['incubus', 'succubus', 'satan'],
  ['maggot', 'cell', 'spiderQueen'],
  ['dark', 'sun', 'blackHole'],
  ['vampireLord', 'mosquitoKing', 'spiderQueen', 'nosferatu']
];

export const basicEvolutions: [Balls, Balls, Balls][] = [
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
  ['freeze', 'ghost', 'wrath'],
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
  ['poison', 'wind', 'noxious']
];

export const evolutions = {
  bleed: {
    broodMother: {
      evolution: 'bleed'
    }
  },
  broodMother: {},
  burn: {},
  cell: {},
  dark: {},
  earthquake: {},
  eggSac: {},
  ghost: {},
  iron: {},
  laserHorizontal: {},
  laserVertical: {},
  light: {},
  lightning: {},
  poison: {},
  vampire: {},
  wind: {}
} satisfies Partial<Record<Balls, Partial<Record<Balls, Record<'evolution', Balls>>>>>;
