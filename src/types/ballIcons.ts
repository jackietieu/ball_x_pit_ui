import type { starterBalls } from '../constants/starterBalls.ts';
import type assetMap from '../lib/assetMap.ts';

export type Balls = keyof typeof assetMap.ballIcons;
export type StarterBalls = (typeof starterBalls)[number];
export type EvolutionBalls = Exclude<Balls, StarterBalls>;
