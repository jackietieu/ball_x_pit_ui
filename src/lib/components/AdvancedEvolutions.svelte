<script lang="ts">
import { advancedEvolutions, multipleAdvancedEvolutions } from '../../constants/ballEvolutions.ts';
import { ballInformation } from '../../constants/ballInformation.ts';
import assetMap from '../assetMap.ts';
import GridIcon from './GridIcon.svelte';
import GridItem from './GridItem.svelte';

const allAdvancedEvolutions = [
  ...advancedEvolutions.map((evolution) => ({
    components: evolution.slice(0, -1),
    result: evolution[evolution.length - 1]
  })),
  ...multipleAdvancedEvolutions.map((evolution) => ({
    components: evolution.slice(0, -1),
    result: evolution[evolution.length - 1]
  }))
];
</script>

<div class="mt-8 w-full">
  <h2 class="text-xl font-bold mb-6 text-white text-center">
    Advanced Evolutions
  </h2>

  <div class="flex flex-col gap-1">
    {#each allAdvancedEvolutions as evolution}
      <div class="flex gap-2 p-2 rounded-lg">
        {#each evolution.components as component, index}
          <GridItem ballKey={component}>
            <GridIcon
              src={assetMap.ballIcons[component]}
              alt={ballInformation[component]?.name + " ball"}
            />
          </GridItem>

          {#if index < evolution.components.length - 1}
            <span class="text-2xl font-bold text-white mx-2">+</span>
          {/if}
        {/each}

        <span class="text-2xl font-bold text-white mx-4">=</span>

        <GridItem ballKey={evolution.result}>
          <GridIcon
            src={assetMap.ballIcons[evolution.result]}
            alt={ballInformation[evolution.result]?.name + " ball"}
          />
        </GridItem>
      </div>
    {/each}
  </div>
</div>
