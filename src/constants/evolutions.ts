import type { Balls } from '../types/ballIcons.js';

// Method 1: Array of evolution tuples (clean and readable)
export const evolutionPairs = [
  // [ball1, ball2, result] - using actual ball names from assets
  ['bleed', 'broodMother', 'leech'],
  ['bleed', 'charm', 'berserk'],
  ['burn', 'earthquake', 'magma'],
  ['dark', 'light', 'flicker'],
  ['lightning', 'wind', 'storm'],
  ['poison', 'cell', 'vrius'], // Note: using 'vrius' as it exists in assets
  ['earthquake', 'iron', 'bomb']
] as const satisfies readonly [Balls, Balls, Balls][];

// Derived evolution map from pairs
export const evolutions = evolutionPairs.reduce(
  (acc, [ball1, ball2, result]) => {
    // Initialize nested objects if they don't exist
    acc[ball1] = acc[ball1] || {};
    acc[ball2] = acc[ball2] || {};

    // Set bidirectional evolution
    acc[ball1]![ball2] = result;
    acc[ball2]![ball1] = result;

    return acc;
  },
  {} as Record<string, Record<string, string>>
);

// Alternative approaches for different use cases:

// Method 2: Object-based pairs (good for complex metadata)
export const evolutionConfig = {
  'bleed+broodMother': { result: 'leech', description: 'Parasitic evolution' },
  'burn+iron': { result: 'inferno', description: 'Heated metal fusion' },
  'dark+light': { result: 'ghost', description: 'Shadow and light merge' }
} as const;

// Method 3: Nested object (good for symmetric relationships)
export const evolutionMatrix = {
  bleed: { broodMother: 'leech' },
  broodMother: { bleed: 'leech' },
  burn: { iron: 'inferno' },
  iron: { burn: 'inferno' }
} as const satisfies Partial<Record<Balls, Partial<Record<Balls, Balls>>>>;
