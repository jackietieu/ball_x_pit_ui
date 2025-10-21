<script>
  import AdvancedEvolutions from "$lib/components/AdvancedEvolutions.svelte";
  import EvolutionChart from "$lib/components/EvolutionChart.svelte";
  import { devLog, env } from "$lib/env.js";

  // Development logging
  devLog("Page loaded in development mode", { env: env.all });
</script>

<svelte:head>
  <title
    >BALL x PIT Evolution Chart - Complete Guide to Ball Combinations &
    Evolutions</title
  >
  <meta
    name="description"
    content="Interactive evolution chart for BALL x PIT showing all ball combinations, advanced evolutions, and transformation recipes. Discover how to evolve balls in BALL x PIT with detailed tooltips and visual guides."
  />
  <meta
    name="keywords"
    content="BALL x PIT, evolution chart, ball combinations, ball evolution, BALL x PIT guide, ball recipes, game guide, evolution calculator"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="BALL x PIT Evolution Chart - Complete Ball Evolution Guide"
  />
  <meta
    property="og:description"
    content="Interactive evolution chart showing all BALL x PIT ball combinations and advanced evolutions. Hover for detailed ball descriptions and evolution recipes."
  />
  <meta property="og:site_name" content="BALL x PIT Evolution Chart" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="BALL x PIT Evolution Chart - Complete Ball Evolution Guide"
  />
  <meta
    name="twitter:description"
    content="Interactive evolution chart showing all BALL x PIT ball combinations and advanced evolutions."
  />

  <!-- Additional SEO -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="BALL x PIT Evolution Chart" />
  <link rel="canonical" href="https://your-domain.com" />
</svelte:head>

{#if env.isDev && env.isDebug}
  <div
    class="fixed top-4 right-4 bg-yellow-600 text-black px-3 py-1 rounded text-sm font-bold z-50"
  >
    DEV MODE
  </div>
{/if}

<main class="mt-8 flex flex-col items-center">
  <header class="text-center mb-4">
    <h1 class="text-3xl font-bold mb-4 text-white">
      BALL x PIT Evolution Chart
    </h1>
    <p class="text-gray-400 max-w-2xl">
      Discover all ball evolution combinations in BALL x PIT with the
      interactive chart. Hover over any ball to see detailed descriptions.
      Advanced evolutions are below the chart.
    </p>
  </header>

  <section aria-label="Basic Evolution Grid">
    <EvolutionChart gridSize={16} />
  </section>

  <section aria-label="Advanced Evolutions" class="mb-4">
    <AdvancedEvolutions />
  </section>

  <footer class="mt-4 mb-4 text-center text-xs text-gray-500 max-w-2xl px-4">
    <p class="mb-2">
      All ball icons and related imagery are copyrighted material from BALL x
      PIT.
    </p>
    <p>
      This is an unofficial fan-made tool and is not affiliated with, endorsed
      by, or sponsored by the creators or publishers of BALL x PIT.
    </p>
  </footer>
</main>
