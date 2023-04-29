import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    target: '#svelte',
    prefetch: false, // disable pre-fetching
  },
  preprocess: preprocess(),
  // preprocess: vitePreprocess(),
}
