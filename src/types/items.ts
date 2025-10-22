import type { starterItems } from '../constants/starterItems.ts';

export type Items =
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

export type StarterItems = (typeof starterItems)[number];
// export type EvolutionItems = Exclude<Items, StarterItems>;
