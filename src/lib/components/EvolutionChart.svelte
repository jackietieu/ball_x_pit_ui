<script>
  import { evolutions } from "../../constants/evolutions.js";
  import { starterBalls } from "../../constants/starterBalls.js";
  import assetMap from "../assetMap.js";
  import GridItem from "./GridItem.svelte";
  import GridIcon from "./GridIcon.svelte";

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
          <GridIcon 
            src={assetMap.ballIcons[yBall]}
            alt={`${cell.x}, ${cell.y}`}
          />
        {:else if cell.y === 0}
          <GridIcon 
            src={assetMap.ballIcons[xBall]}
            alt={`${cell.x}, ${cell.y}`}
          />
        {:else if evolution}
          <GridIcon 
            src={assetMap.ballIcons[evolution]}
            alt={`${cell.x}, ${cell.y}`}
          />
        {/if}
      </GridItem>
    {/each}
  {/each}
</div>
