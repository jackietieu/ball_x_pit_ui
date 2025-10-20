import type { BallIconKey } from '../types/ballIcons.ts';

export const starterBalls = [
  'bleed',
  'broodMother',
  'burn',
  'cell',
  'dark',
  'earthquake',
  'eggSac',
  'ghost',
  'iron',
  'laserHorizontal',
  'laserVertical',
  'light',
  'lightning',
  'poison',
  'vampire',
  'wind'
] as const satisfies BallIconKey[];
