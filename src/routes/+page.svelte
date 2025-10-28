<script>
  import NonGridEvolutions from '$lib/components/NonGridEvolutions.svelte';
  import EvolutionGrid from '$lib/components/EvolutionGrid.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { devLog, env } from '$lib/env.js';
  import { starterBalls } from '../constants/starterBalls.ts';

  // Development logging
  devLog('Page loaded in development mode', { env: env.all });
</script>

<svelte:head>
  <title>BALL x PIT Evolution Chart - Complete Guide to Ball and Passive Evolutions</title>
  <meta
    name="description"
    content="Interactive evolution chart for BALL x PIT showing all ball and passive evolutions. Discover how to evolve balls in BALL x PIT with detailed tooltips and visual guides."
  />
  <meta
    name="keywords"
    content="BALL x PIT, evolution chart, ball combinations, ball evolution, BALL x PIT guide, ball recipes, game guide, evolution calculator"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="BALL x PIT Evolution Chart - Complete Ball Evolution Guide" />
  <meta
    property="og:description"
    content="Interactive evolution chart showing all BALL x PIT ball combinations and advanced evolutions. Hover for detailed ball descriptions and evolution recipes."
  />
  <meta property="og:site_name" content="BALL x PIT Evolution Chart" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BALL x PIT Evolution Chart - Complete Ball Evolution Guide" />
  <meta
    name="twitter:description"
    content="Interactive evolution chart showing all BALL x PIT ball combinations and advanced evolutions."
  />

  <!-- Additional SEO -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="BALL x PIT Evolution Chart" />
  <link rel="canonical" href="https://ballxpit.netlify.app/" />
</svelte:head>

{#if env.isDev && env.isDebug}
  <div
    class="fixed top-4 right-4 bg-yellow-600 text-black px-3 py-1 rounded text-sm font-bold z-50"
  >
    DEV MODE
  </div>
{/if}

<main class="flex flex-col max-w-7xl mx-auto">
  <header class="text-center px-4 mb-4">
    <img
      src="https://influencers.devolverdigital.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevolver-digital%2Fimage%2Fupload%2Fv1748283936%2Fmothership-payload%2F1748283936628_LOGO_FINAL_CLEAN_WHITE-1_pzxy9y.png&w=1200&q=75"
      alt="BALL x PIT Logo"
      class="mx-auto max-w-48 sm:max-w-56 md:max-w-64 lg:max-w-72"
    />
    <p class="text-gray-400 max-w-2xl mx-auto">
      Discover all ball and passive evolution combinations in BALL x PIT. Hover over any icon to see
      descriptions. Site is responsive, so you can see every evolution without scrolling on a large
      enough monitor. You'll have to scroll down on smaller devices.
    </p>
  </header>

  <div class="flex flex-col xl:flex-row xl:gap-8 xl:items-start xl:justify-center">
    <section aria-label="Basic Evolution Grid" class="xl:flex-shrink-0">
      <EvolutionGrid gridSize={starterBalls.length + 1} />
    </section>

    <section aria-label="Advanced Evolutions" class="mb-4 xl:max-w-lg xl:flex-shrink-0">
      <NonGridEvolutions />
    </section>
  </div>

  <Footer />
</main>
