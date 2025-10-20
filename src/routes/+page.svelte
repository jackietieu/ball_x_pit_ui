<script>
  import GridItem from "$lib/components/GridItem.svelte";
  import assetMap from "$lib/assetMap.js";
  import { starterBalls } from "../constants/starterBalls.js";

  const gridSize = 16;
  const grid = $derived(
    Array.from({ length: gridSize }, (_, y) =>
      Array.from({ length: gridSize }, (_, x) => ({ x, y }))
    )
  );
</script>

<div class="mt-8 flex flex-col items-center">
  <h1 class="text-2xl font-bold mb-4 text-white text-center">
    BALL x PIT Evolution Chart
  </h1>
  <p class="mb-4 text-gray-400 text-center">
    Hover over cells to display more information.
  </p>

  <div class="grid grid-cols-16 gap-0 w-fit p-2">
    {#each grid as row}
      {#each row as cell}
        <GridItem x={cell.x} y={cell.y}>
          {#if cell.x === cell.y}
            <span style="color: var(--yellow); font-size: 2em;">X</span>
          {:else if cell.x === 0}
            <div class="flex flex-col items-center">
              <img
                src={assetMap.ballIcons[starterBalls[cell.y - 1]]}
                alt={`${cell.x}, ${cell.y}`}
                class="w-12 h-12 rounded border border-[var(--border-dark)]"
              />
            </div>
          {:else if cell.y === 0}
            <div class="flex flex-col items-center">
              <img
                src={assetMap.ballIcons[starterBalls[cell.x - 1]]}
                alt={`${cell.x}, ${cell.y}`}
                class="w-12 h-12 rounded border border-[var(--border-dark)]"
              />
            </div>
          {:else}{/if}
        </GridItem>
      {/each}
    {/each}
  </div>
</div>
