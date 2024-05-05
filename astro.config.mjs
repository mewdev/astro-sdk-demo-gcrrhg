import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    svelte(),
    vue(),
    react(),
    storyblok({
      accessToken: 'rMV4ltGOi6I2SAx3lrg3rQtt',
      apiOptions: {
        cache: { clear: 'auto', type: 'memory' },
      },
      bridge: true,
      enableFallbackComponent: true,
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
    tailwind(),
  ],
});
