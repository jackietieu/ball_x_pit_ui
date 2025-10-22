import assetMap from '$lib/assetMap.ts';
import type { Balls } from '../types/balls.ts';
import type { Items } from '../types/items.ts';

export const allBalls = Object.keys(assetMap.ballIcons) as Balls[];

export type ItemInfo = {
  name: string;
  description?: string;
};

export const itemInformation: Record<Items, ItemInfo> = {
  babyRattle: {
    name: 'Baby Rattle',
    description: '',
  },
  breastplate: {
    name: 'Breastplate',
    description: '',
  },
  reachersSpear: {
    name: "Reacher's Spear",
    description: '',
  },
  etherealCloak: {
    name: 'Ethereal Cloak',
    description: '',
  },
  everflowingGoblet: {
    name: 'Everflowing Goblet',
    description: '',
  },
  crownOfThorns: {
    name: 'Crown Of Thorns',
    description: '',
  },
  fleetFeet: {
    name: 'Fleet Feet',
    description: '',
  },
  warHorn: {
    name: 'War Horn',
    description: '',
  },
  wretchedOnion: {
    name: 'Wretched Onion',
    description: '',
  },
  deadeyesAmulet: {
    name: "Deadeye's Amulet",
    description: '',
  },
  vampiricSword: {
    name: 'Vampiric Sword',
    description: '',
  },
  spikedCollar: {
    name: 'Spiked Collar',
    description: '',
  },
  radiantFeather: {
    name: 'Radiant Feather',
    description: '',
  },
  diamondHiltedDagger: {
    name: 'Diamond Hilted Dagger',
    description: '',
  },
  emeraldHiltedDagger: {
    name: 'Emerald Hilted Dagger',
    description: '',
  },
  rubyHiltedDagger: {
    name: 'Ruby Hilted Dagger',
    description: '',
  },
  sapphireHiltedDagger: {
    name: 'Sapphire Hilted Dagger',
    description: '',
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
    description: '',
  },
};
