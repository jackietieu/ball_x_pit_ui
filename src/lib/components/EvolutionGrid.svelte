<script lang="ts">
import { evolutions } from '../../constants/ballEvolutions.ts';
import { ballInformation } from '../../constants/ballInformation.ts';
import { starterBalls } from '../../constants/starterBalls.ts';
import assetMap from '../assetMap.ts';
import GridIcon from './GridIcon.svelte';
import GridItem from './GridItem.svelte';

const { gridSize } = $props();

const grid = $derived(
  Array.from({ length: gridSize }, (_, y) => Array.from({ length: gridSize }, (_, x) => ({ x, y })))
);

let scrollContainer: HTMLDivElement;

// Ensure scrolling works properly on mount
$effect(() => {
  if (scrollContainer) {
    // Small initial scroll to "activate" the scroll area
    scrollContainer.scrollLeft = 1;
    setTimeout(() => {
      scrollContainer.scrollLeft = 0;
    }, 10);
  }
});
</script>

<div class="w-full flex justify-center">
  <div class="overflow-x-auto touch-pan-x" style="-webkit-overflow-scrolling: touch; scroll-behavior: smooth;" bind:this={scrollContainer}>
    <div
      class="grid gap-0 p-4 relative mx-auto"
      style="grid-template-columns: repeat({gridSize}, 3.25rem); width: max-content; overflow: visible;"
    >
    {#each grid as row}
      {#each row as cell}
        {@const xBall = starterBalls[cell.x - 1]}
        {@const yBall = starterBalls[cell.y - 1]}
        {@const evolution = evolutions[xBall]?.[yBall]?.evolution}
        {@const currentBall =
          cell.x === 0 ? yBall : cell.y === 0 ? xBall : evolution}
        <GridItem x={cell.x} y={cell.y} ballKey={currentBall}>
          {#if cell.x === cell.y}
            <span style="color: var(--yellow); font-size: 2em;">X</span>
          {:else if cell.x === 0}
            <GridIcon
              src={assetMap.ballIcons[yBall]}
              alt={ballInformation[yBall]?.name + " ball"}
            />
          {:else if cell.y === 0}
            <GridIcon
              src={assetMap.ballIcons[xBall]}
              alt={ballInformation[xBall]?.name + " ball"}
            />
          {:else if evolution}
            <GridIcon
              src={assetMap.ballIcons[evolution]}
              alt={ballInformation[evolution]?.name + " ball"}
            />
          {/if}
        </GridItem>
      {/each}
    {/each}
    </div>
  </div>
</div>
