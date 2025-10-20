<script>
  import EvolutionChart from "$lib/components/EvolutionChart.svelte";
</script>

<div class="mt-8 flex flex-col items-center">
  <h1 class="text-2xl font-bold mb-4 text-white text-center">
    BALL x PIT Evolution Chart
  </h1>
  <p class="mb-4 text-gray-400 text-center">
    Hover over cells to display more information.
  </p>

  <EvolutionChart gridSize={16} />
</div>
