import type { starterItems } from '../constants/starterItems.ts';

export type Items =
  | 'healthPotion'
  | 'manaPotion'
  | 'strengthElixir'
  | 'defenseElixir'
  | 'speedBoots'
  | 'magicWand'
  | 'healingHerb'
  | 'antidote'
  | 'reviveScroll'
  | 'energyDrink'
  | 'staminaBar'
  | 'focusAmulet'
  | 'luckCharm'
  | 'fireStone'
  | 'waterStone'
  | 'earthStone'
  | 'airStone'
  | 'lightStone'
  | 'darkStone';
export type StarterItems = (typeof starterItems)[number];
export type EvolutionItems = Exclude<Items, StarterItems>;
