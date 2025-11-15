import assetMap from '$lib/assetMap.ts';
import type { Balls } from '../types/balls.ts';

export const allBalls = Object.keys(assetMap.ballIcons) as Balls[];

export type BallInfo = {
  name: string;
  description: string;
  // TODO: Character that starts with this ball
  starterCharacter?: string;
};

export const ballInformation: Record<Balls, BallInfo> = {
  darkAssassin: {
    name: 'Assassin',
    description:
      'Passes through the front of enemies, but not the back. Backstabs deal 30% bonus damage.',
  },
  berserk: {
    name: 'Berserk',
    description:
      'Each hit has a 30% chance of causing enemies to go berserk for 6 seconds. Berserk enemies deal 15-24 damage to adjacent enemies every second.',
  },
  blackHole: {
    name: 'Black Hole',
    description:
      'Instantly kills the first non-boss enemy that it hits, but destroys itself afterwards. Has a 7 second cooldown, before it can be shot again.',
  },
  blizzard: {
    name: 'Blizzard',
    description:
      'Freezes all enemies within a 2 tile radius for 0.8 seconds, dealing 1-50 damage.',
  },
  bomb: {
    name: 'Bomb',
    description:
      'Explodes when hitting an enemy, dealing 150-300 damage to nearby enemies. Has a 3 second cooldown before it can be shot again.',
  },
  flash: {
    name: 'Flash',
    description:
      'Damage all enemies on screen for 1-3 damage after hitting an enemy and blind them for 2 seconds.',
  },
  flicker: {
    name: 'Flicker',
    description: 'Deals 1-7 damage to every enemy on screen every 1.4 seconds.',
  },
  freezeRay: {
    name: 'Freeze Ray',
    description:
      'Emits a freeze ray when hitting an enemy, dealing 20-50 to all enemies in its path, with a 10% chance of freezing them for 10.0 seconds.',
  },
  frozenFlame: {
    name: 'Frozen Flame',
    description:
      'Add 1 stack of frostburn on hit for 20 seconds (max 4 stacks). Frostburnt units are dealt 8-12 damage per stack per second and receive 25% more damage from other sources.',
  },
  glacier: {
    name: 'Glacier',
    description:
      'Release glacial spikes over time that deal 15-30 to enemies that touch them and freeze them for 2.0 seconds. This ball and its glacial spikes also deal 6-12 damage to nearby units.',
  },
  hemorrhage: {
    name: 'Hemorrhage',
    description:
      'Inflicts 3 stacks of bleed. When hitting an enemy with 12 stacks of bleed or more, consumes all stacks of bleed to deal 20% of current health.',
  },
  holyLaser: {
    name: 'Holy Laser',
    description: 'Deals 24-36 damage to all enemies in the same row and column.',
  },
  incubus: {
    name: 'Incubus',
    description:
      'Each hit has a 4% chance of charming the enemy for 9 seconds. Charmed enemies curse nearby enemies. Cursed enemies are dealt 100-200 after being hit 5 times.',
  },
  inferno: {
    name: 'Inferno',
    description:
      'Applies 1 stack of burn every second to all enemies within a 2 tile radius. Burn lasts for 6 seconds, dealing 3-7 damage per stack per second.',
  },
  laserBeam: {
    name: 'Laser Beam',
    description:
      'Emit a laser beam on hit that deals 30-42 damage and blinds enemies for 8 seconds.',
  },
  leech: {
    name: 'Leech',
    description:
      'Attaches up to 1 leech onto enemies it hits, which adds 2 stacks of bleed per second (Max 24 stacks).',
  },
  lightningRod: {
    name: 'Lightning Rod',
    description:
      'Plants a lightning rod into enemies it hits. These enemies are struck by lightning every 3. seconds, dealing 1-30 damage to up to 8 nearby enemies.',
  },
  lovestruck: {
    name: 'Lovestruck',
    description:
      'Inflicts lovestruck on hit enemies for 20 seconds. Lovestruck units have a 50% chance of healing you for 5 health when they attack.',
  },
  maggot: {
    name: 'Maggot',
    description:
      'Infest enemies on hit with maggots. When they die, they explode into 1-2 baby balls.',
  },
  magma: {
    name: 'Magma',
    description:
      'Emits lava blobs over time. Enemies who walk into lava blobs are dealt 15-30 damage and gain 1 stack of burn (max 3 stacks). Burn lasts for 3 seconds, dealing 3-8 damage per stack per second. This ball and its lava blobs also deal 6-12 damage to nearby units.',
  },
  mosquitoKing: {
    name: 'Mosquito King',
    description:
      'Spawns a mosquito each time it hits an enemy. Mosquitos attack a random enemy, dealing 80-120 damage each. If a mosquito kills an enemy, they steal 1 health.',
  },
  mosquitoSwarm: {
    name: 'Mosquito Swarm',
    description:
      'Explodes into 3-6 mosquitos. Mosquitos attack random enemies, dealing 80-120 damage each. If a mosquito kills an enemy, they steal 1 health.',
  },
  noxious: {
    name: 'Noxious',
    description:
      'Passes through enemies and applies 3 stacks of poison to nearby enemies with a 2 tile radius. Poison lasts 4 seconds and each stack deals 1-3 damage per second.',
  },
  nuclearBomb: {
    name: 'Nuclear Bomb',
    description:
      'Explodes when hitting an enemy, dealing 300-500 damage to nearby enemies and applying 1 stack of radiation to everyone present indefinitely (max 5 stacks). Each stack of radiation increases damage received by 10%. Has a 3 second cooldown.',
  },
  overgrowth: {
    name: 'Overgrowth',
    description:
      'Applies 1 stack of overgrowth. Upon reaching 3, consume all stacks and deal 150-200 damage to all enemies in a 3x3 tile square.',
  },
  phantom: {
    name: 'Phantom',
    description:
      'Curse enemies on hit. Cursed enemies are dealt 100-200 damage after being hit 5 times.',
  },
  radiationBeam: {
    name: 'Radiation Beam',
    description:
      'Emit a radiation beam on hit that deals 24-48 damage and applies 1 stack of radiation (max 5 stacks). Radiation lasts for 15 seconds and cause enemies to receive 10% more damage from all sources per stack.',
  },
  sacrifice: {
    name: 'Sacrifice',
    description:
      'Inflicts 4 stacks of bleed (Max 15 stacks) and applies curse to hit enemies. Cursed enemies are dealt 50-100 after being hit 5 times.',
  },
  sandstorm: {
    name: 'Sandstorm',
    description:
      'Goes through enemies and is surrounded by a raging storm dealing 10-20 damage per second and blinding nearby enemies for 3 seconds.',
  },
  satan: {
    name: 'Satan',
    description:
      'While active, add 1 stack of burn to all enemies per second (max 5 stacks), dealing 10-20 damage per stack per second and make them go berserk, dealing 15-24 damage to adjacent enemies every second.',
  },
  shotgun: {
    name: 'Shotgun',
    description:
      'Shoots 3-7 iron baby balls after hitting a wall. Iron baby balls move at 200% speed but are destroyed upon hitting anything.',
  },
  soulSucker: {
    name: 'Soul Sucker',
    description:
      'Passes through enemies and saps them, with a 30% chance of stealing 1 health and reducing their attack damage by 20%. Lifesteal chance only applies once per enemy.',
  },
  spiderQueen: {
    name: 'Spider Queen',
    description: 'Has a 25% chance of birthing an Egg Sac each time it hits an enemy.',
  },
  storm: {
    name: 'Storm',
    description:
      'Emits lightning to strike nearby enemies every second, dealing 1-40 damage.',
  },
  succubus: {
    name: 'Succubus',
    description:
      'Each hit has a 4% chance of charming the enemy for 9 seconds. Heals 1 when hitting a charmed enemy.',
  },
  sun: {
    name: 'Sun',
    description:
      'Blind all enemies in view and add 1 stack of burn every second (max 5 stacks). Burn lasts for 6 seconds and deals 6-12 damage per stack per second.',
  },
  swamp: {
    name: 'Swamp',
    description:
      'Leaves behind tar blobs over time. Enemies who walk into tar blobs are dealt 15-30 damage, are slowed by 50% for 7 seconds and gain 1 stack of poison (max 8 stacks). Each stack of poison deals 1-3 damage per second. This ball and its tar blobs also deal 6-12 damage to nearby units.',
  },
  vampireLord: {
    name: 'Vampire Lord',
    description:
      'Each hit inflicts 3 stacks of bleed. Heals 1 health and consumes all stacks when hitting an enemy with at least 10 stacks of bleed.',
  },
  virus: {
    name: 'Virus',
    description:
      'Applies 1 stack of disease to units it hits (max 8 stacks). Disease lasts for 6 seconds. Each stack of disease deals 3-6 damage per second and diseased units have a 15% chance of passing a stack to undiseased nearby enemies each second.',
  },
  voluptuousEggSac: {
    name: 'Voluptuous Egg Sac',
    description:
      'Explodes into 2-3 egg sacs on hitting an enemy. Has a 3 second cooldown before it can be shot again.',
  },
  wraith: {
    name: 'Wraith',
    description: 'Freezes any enemy it passes through for 0.8 seconds.',
  },
  nosferatu: {
    name: 'Nosferatu',
    description:
      'Spawns a vampire bat each bounce. Vampire bats fly towards a random enemy, dealing 132-176 damage on hit, turning into a Vampire Lord.',
  },
  bleed: {
    name: 'Bleed',
    description:
      'Inflict two stacks of bleed. Bleeding enemies receive one damage per stack when hit by a ball (Max eight stacks).',
  },
  broodMother: {
    name: 'Brood Mother',
    description:
      'Has a 25 percent chance of birthing a baby ball each time it hits an enemy.',
  },
  burn: {
    name: 'Burn',
    description:
      'Add one stack of burn on hit for three seconds (max three stacks). Burnt units are dealt four to eight damage per stack per second.',
  },
  cell: {
    name: 'Cell',
    description: 'Splits into a clone on hit two times.',
  },
  charm: {
    name: 'Charm',
    description:
      'Each hit has a four percent chance of charming the enemy for five seconds. Charmed units walk up the board and attack enemies.',
  },
  dark: {
    name: 'Dark',
    description:
      'Deals three times damage but destroys itself after hitting an enemy. Has a three-second cooldown before it can be shot again.',
  },
  earthquake: {
    name: 'Earthquake',
    description: 'Deals 5-13 damage to nearby units in a 3×3 square.',
  },
  eggSac: {
    name: 'Egg Sac',
    description:
      'Explodes into two to four baby balls on hitting an enemy. Has a three-second cooldown before it can be shot again.',
  },
  freeze: {
    name: 'Freeze',
    description:
      'Has a four percent chance to freeze enemies for five seconds. Frozen enemies receive 25 percent more damage.',
  },
  ghost: {
    name: 'Ghost',
    description: 'Passes through enemies.',
  },
  iron: {
    name: 'Iron',
    description: 'Deals double damage but moves 40 percent slower.',
  },
  laserHorizontal: {
    name: 'Laser (Horizontal)',
    description: 'Deals 9-18 damage to all enemies in the same row.',
  },
  laserVertical: {
    name: 'Laser (Vertical)',
    description: 'Deals 9-18 damage to all enemies in the same column.',
  },
  light: {
    name: 'Light',
    description:
      'Blinds enemies on hit for three seconds. Blinded units have a hard time detecting you and have a 50 percent chance of missing when they attack.',
  },
  lightning: {
    name: 'Lightning',
    description: 'Deals 1-20 damage to up to 3 nearby enemies.',
  },
  poison: {
    name: 'Poison',
    description:
      'Applies one stack of poison on hit (max 5 stacks). Poison lasts for six seconds and each stack deals one to four damage per second.',
  },
  vampire: {
    name: 'Vampire',
    description: 'Each hit has a 4.5 percent chance of healing one health.',
  },
  wind: {
    name: 'Wind',
    description:
      'Passes through enemies and slows them down by 30 percent for five seconds, but deals 25 percent less damage.',
  },
};
