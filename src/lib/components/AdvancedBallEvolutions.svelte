<script lang="ts">
  import {
    advancedEvolutions,
    multipleAdvancedEvolutions,
  } from '../../constants/ballEvolutions.ts';
  import { ballInformation } from '../../constants/ballInformation.ts';
  import assetMap from '../assetMap.ts';
  import GridIcon from './GridIcon.svelte';
  import GridItem from './GridItem.svelte';

  const allAdvancedEvolutions = [
    ...advancedEvolutions.map((evolution) => ({
      components: evolution.slice(0, -1),
      result: evolution[evolution.length - 1],
    })),
    ...multipleAdvancedEvolutions.map((evolution) => ({
      components: evolution.slice(0, -1),
      result: evolution[evolution.length - 1],
    })),
  ];
</script>

<div class="panel w-full p-4">
  <h2 class="text-xl font-bold mb-5 text-[var(--gold)] text-center xl:text-left tracking-wide">
    Advanced Ball Evolutions
  </h2>

  <div class="flex flex-col gap-1 items-center xl:items-start">
    {#each allAdvancedEvolutions as evolution}
      <div class="w-full overflow-x-auto">
        <div
          class="flex items-center gap-2 p-2 rounded-lg justify-center xl:justify-start"
          style="min-width: max-content;"
        >
          {#each evolution.components as component, index}
            <GridItem ballKey={component} x={0} y={0}>
              <GridIcon
                sprite={assetMap.ballIcons[component]}
                alt={ballInformation[component]?.name + ' ball'}
              />
            </GridItem>

            {#if index < evolution.components.length - 1}
              <span class="text-2xl font-bold text-white mx-2">+</span>
            {/if}
          {/each}

          <span class="text-2xl font-bold text-white mx-4">=</span>

          <GridItem ballKey={evolution.result} x={0} y={0}>
            <GridIcon
              sprite={assetMap.ballIcons[evolution.result]}
              alt={ballInformation[evolution.result]?.name + ' ball'}
            />
          </GridItem>
        </div>
      </div>
    {/each}
  </div>
</div>
