import type { Passives, StarterPassives } from '../types/passives.ts';

export const passiveEvolutions: [StarterPassives, StarterPassives, Passives][] = [
  ['warHorn', 'babyRattle', 'cornucopia'],
  ['wretchedOnion', 'breastplate', 'odiferousShell'],
  ['reachersSpear', 'deadeyesAmulet', 'graciousImpaler'],
  ['etherealCloak', 'ghostlyCorset', 'phantomRegalia'],
  ['everflowingGoblet', 'vampiricSword', 'soulReaver'],
  ['crownOfThorns', 'spikedCollar', 'tormentorsMask'],
  ['fleetFeet', 'radiantFeather', 'wingsOfTheAnointed'],
  ['turret', 'handFan', 'grotesqueArtillery'],
] as const;

export const advancedPassiveEvolutions = [
  [
    'diamondHiltedDagger' satisfies StarterPassives,
    'emeraldHiltedDagger' satisfies StarterPassives,
    'rubyHiltedDagger' satisfies StarterPassives,
    'sapphireHiltedDagger' satisfies StarterPassives,
    'deadeyesCross',
  ],
  ['graciousImpaler', 'deadeyesCross', 'deadeyesImpaler'],
] as const satisfies Passives[][];

export const allPassiveEvolutions = [...passiveEvolutions, ...advancedPassiveEvolutions];
