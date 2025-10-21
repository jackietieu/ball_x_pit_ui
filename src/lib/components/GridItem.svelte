<script lang="ts">
import { ballInformation } from '../../constants/ballInformation.ts';
import type { Balls } from '../../types/balls.ts';
import Tooltip from './Tooltip.svelte';

const {
  children = null,
  x,
  y,
  ballKey = null
}: {
  children?: any;
  x: number;
  y: number;
  ballKey?: Balls | null;
} = $props();

const cellClasses = $derived(
  [
    'p-0.5',
    'w-13 h-13',
    'flex items-center justify-center',
    'transition-all duration-200',
    'select-none',
    'text-sm font-medium',
    'border border-[var(--border-dark)]',
    'hover:bg-[var(--bg-dark-hover)]',
    children ? 'text-gray-800' : 'text-gray-400'
  ]
    .filter(Boolean)
    .join(' ')
);

const tooltip = $derived(
  ballKey && ballInformation[ballKey]
    ? `${ballInformation[ballKey].name}: ${ballInformation[ballKey].description}`
    : undefined
);
</script>

{#if ballKey && ballInformation[ballKey]}
  <Tooltip delay={100}>
    <div class={cellClasses} role="gridcell">
      {@render children()}
    </div>
    {#snippet tooltip()}
      <div class="font-bold text-yellow-400 mb-1">
        {ballInformation[ballKey].name}
      </div>
      <div class="text-sm">
        {ballInformation[ballKey].description}
      </div>
    {/snippet}
  </Tooltip>
{:else}
  <div class={cellClasses} role="gridcell">
   {@render children()}
  </div>
{/if}
