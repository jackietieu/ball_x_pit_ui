import assetMap from '$lib/assetMap.ts';
import type { Balls } from '../types/balls.ts';
import type { Passives } from '../types/passives.ts';

export const allBalls = Object.keys(assetMap.ballIcons) as Balls[];

export type PassiveInfo = {
  name: string;
  description?: string;
};

export const passiveInformation: Record<Passives, PassiveInfo> = {
  babyRattle: {
    name: 'Baby Rattle',
    description: 'Gain 1.5x baby balls, but your aim becomes scattered.',
  },
  breastplate: {
    name: 'Breastplate',
    description: 'Decrease damage taken by 10%',
  },
  reachersSpear: {
    name: "Reacher's Spear",
    description: 'Increase crit chance to 20% when hitting enemies in the same column as you. Balls start off at 70% speed but increase by 20% each bounce (max 200%).',
  },
  etherealCloak: {
    name: 'Ethereal Cloak',
    description: 'Balls go through enemies and deal 25% bonus damage until they hit the back of the field',
  },
  everflowingGoblet: {
    name: 'Everflowing Goblet',
    description: 'You can heal past your max health at 20% efficiency.',
  },
  crownOfThorns: {
    name: 'Crown Of Thorns',
    description: 'Destroy the 2 nearest enemies when you are hit from close range',
  },
  fleetFeet: {
    name: 'Fleet Feet',
    description: 'Increase movement speed by 10% and move at full speed while shooting.',
  },
  warHorn: {
    name: 'War Horn',
    description: 'All baby balls deal 20% more damage',
  },
  wretchedOnion: {
    name: 'Wretched Onion',
    description: 'Deals 6-12 per second to enemies within 2 tiles.',
  },
  deadeyesAmulet: {
    name: "Deadeye's Amulet",
    description: 'Critical hits deal 10-15 bonus damage.',
  },
  vampiricSword: {
    name: 'Vampiric Sword',
    description: 'Each kill heals you by 5. but each shot you take deals 2 damage to you.',
  },
  spikedCollar: {
    name: 'Spiked Collar',
    description: 'Deal 30-50 to enemies the first time you get into their melee attack range.',
  },
  radiantFeather: {
    name: 'Radiant Feather',
    description: 'Increase ball launch speed by 20%, but get knocked back a little each time you shoot a ball',
  },
  diamondHiltedDagger: {
    name: 'Diamond Hilted Dagger',
    description: 'Increase crit chance to 20% when hitting enemies in the front.',
  },
  emeraldHiltedDagger: {
    name: 'Emerald Hilted Dagger',
    description: 'Increase crit chance to 30% when hitting enemies on their right side.',
  },
  rubyHiltedDagger: {
    name: 'Ruby Hilted Dagger',
    description: 'Increase crit chance to 15% when hitting enemies in the back.',
  },
  sapphireHiltedDagger: {
    name: 'Sapphire Hilted Dagger',
    description: 'Increase crit chance to 30% when hitting enemies on their left side.',
  },
  deadeyesCross: {
    name: "Deadeye's Cross",
    description: 'Increase critical hit chance to 60%',
  },
  cornucopia: {
    name: 'Cornucopia',
    description: 'Each time baby balls are created, spawn 0-1 additional baby balls.',
  },
  odiferousShell: {
    name: 'Odiferous Shell',
    description: 'When you touch enemies, they have a 50% chance of instantly dying',
  },
  graciousImpaler: {
    name: 'Gracious Impaler',
    description: 'Critical hits have a 5% chance to instantly kill enemies',
  },
  phantomRegalia: {
    name: 'Phantom Regalia',
    description:
      'Balls go through enemies until they hit the back wall. Balls deal 50% more damage when going through enemies',
  },
  soulReaver: {
    name: 'Soul Reaver',
    description:
      'Each kill heals you by 1 and you can heal past your max health at 30% efficiency.',
  },
  tormentorsMask: {
    name: "Tormentor's Mask",
    description: 'Enemies have a 10% chance of dying immediately the first time they detect you',
  },
  wingsOfTheAnointed: {
    name: 'Wings Of The Anointed',
    description:
      'Balls move 40% faster and you move 20% faster. You no longer are affected by environmental hazards on the ground.',
  },
  ghostlyCorset: {
    name: 'Ghostly Corset',
    description: 'Balls go through enemies and deal 20% bonus damage when hitting them from the side.',
  },
};
