<script>
  import { evolutions } from "../../constants/evolutions.js";
  import { starterBalls } from "../../constants/starterBalls.js";
  import assetMap from "../assetMap.js";
  import GridItem from "./GridItem.svelte";

  const { gridSize = 16 } = $props();

  const grid = $derived(
    Array.from({ length: gridSize }, (_, y) =>
      Array.from({ length: gridSize }, (_, x) => ({ x, y }))
    )
  );
</script>

<div class="grid grid-cols-16 gap-0 w-fit p-2">
  {#each grid as row}
    {#each row as cell}
      {@const xBall = starterBalls[cell.x - 1]}
      {@const yBall = starterBalls[cell.y - 1]}
      {@const evolution = evolutions[xBall]?.[yBall]?.evolution}
      <GridItem x={cell.x} y={cell.y}>
        {#if cell.x === cell.y}
          <span style="color: var(--yellow); font-size: 2em;">X</span>
        {:else if cell.x === 0}
          <div class="flex flex-col items-center">
            <img
              src={assetMap.ballIcons[yBall]}
              alt={`${cell.x}, ${cell.y}`}
              class="w-full h-full object-contain rounded"
            />
          </div>
        {:else if cell.y === 0}
          <div class="flex flex-col items-center">
            <img
              src={assetMap.ballIcons[xBall]}
              alt={`${cell.x}, ${cell.y}`}
              class="w-full h-full object-contain rounded"
            />
          </div>
        {:else if evolution}
          <div class="flex flex-col items-center">
            <img
              src={assetMap.ballIcons[evolution]}
              alt={`${cell.x}, ${cell.y}`}
              class="w-full h-full object-contain rounded"
            />
          </div>
        {/if}
      </GridItem>
    {/each}
  {/each}
</div>
