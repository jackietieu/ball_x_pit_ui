<script>
  import AdvancedEvolutions from '$lib/components/AdvancedEvolutions.svelte';
  import EvolutionGrid from '$lib/components/EvolutionGrid.svelte';
  import { devLog, env } from '$lib/env.js';
  import { starterBalls } from '../constants/starterBalls.ts';

  // Development logging
  devLog('Page loaded in development mode', { env: env.all });
</script>

<svelte:head>
  <title>BALL x PIT Evolution Chart - Complete Guide to Ball Combinations & Evolutions</title>
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
  <link rel="canonical" href="https://your-domain.com" />
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
      enough monitor. You'll have to scroll for smaller devices.
    </p>
  </header>

  <!-- Responsive layout: side-by-side on large screens, stacked on small screens -->
  <div class="flex flex-col xl:flex-row xl:gap-8 xl:items-start xl:justify-center">
    <section aria-label="Basic Evolution Grid" class="xl:flex-shrink-0">
      <EvolutionGrid gridSize={starterBalls.length + 1} />
    </section>

    <section aria-label="Advanced Evolutions" class="mb-4 xl:max-w-lg xl:flex-shrink-0">
      <AdvancedEvolutions />
    </section>
  </div>

  <footer class="mt-4 mb-4 text-center text-xs text-gray-500 max-w-2xl px-4 mx-auto">
    <p class="mb-2">All ball icons and related imagery are copyrighted material from BALL x PIT.</p>
    <p class="mb-4">
      This is an unofficial fan-made tool and is not affiliated with, endorsed by, or sponsored by
      the creators or publishers of BALL x PIT.
    </p>

    <div class="flex justify-center">
      <a
        href="https://github.com/jackietieu/ball_x_pit_ui"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Visit GitHub profile"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
          />
        </svg>
        <span class="text-sm">GitHub</span>
      </a>
    </div>
  </footer>
</main>
