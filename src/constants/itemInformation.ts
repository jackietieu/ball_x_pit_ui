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
    description: '',
  },
  cornucopia: {
    name: 'Cornucopia',
    description: '',
  },
  odiferousShell: {
    name: 'Odiferous Shell',
    description: '',
  },
  graciousImpaler: {
    name: 'Gracious Impaler',
    description: '',
  },
  phantomRegalia: {
    name: 'Phantom Regalia',
    description: '',
  },
  soulReaver: {
    name: 'Soul Reaver',
    description: '',
  },
  tormentorsMask: {
    name: "Tormentor's Mask",
    description: '',
  },
  wingsOfTheAnointed: {
    name: 'Wings Of The Anointed',
    description: '',
  },
  ghostlyCorset: {
    name: 'Ghostly Corset',
    description: '',
  },
};
