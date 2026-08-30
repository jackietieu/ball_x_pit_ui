import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Static adapter for deployment
    adapter: adapter({
      edge: false,
      split: false,
      pages: 'build',
      assets: 'build',
      precompress: false,
      strict: true,
    }),
  },
};

export default config;
