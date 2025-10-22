import type { starterPassives } from '../constants/starterPassives.ts';

export type Passives =
  | 'babyRattle'
  | 'breastplate'
  | 'reachersSpear'
  | 'etherealCloak'
  | 'everflowingGoblet'
  | 'crownOfThorns'
  | 'fleetFeet'
  | 'warHorn'
  | 'wretchedOnion'
  | 'deadeyesAmulet'
  | 'ghostlyCorset'
  | 'vampiricSword'
  | 'spikedCollar'
  | 'radiantFeather'
  | 'diamondHiltedDagger'
  | 'emeraldHiltedDagger'
  | 'rubyHiltedDagger'
  | 'sapphireHiltedDagger'
  | 'deadeyesCross'
  | 'cornucopia'
  | 'odiferousShell'
  | 'graciousImpaler'
  | 'phantomRegalia'
  | 'soulReaver'
  | 'tormentorsMask'
  | 'wingsOfTheAnointed'
  | 'wretchedOnion'
  | 'ghostlyCorset';

export type StarterPassives = (typeof starterPassives)[number];
