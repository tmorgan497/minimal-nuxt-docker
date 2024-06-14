// https://nuxt.com/docs/api/configuration/nuxt-config

import * as path from 'path';

const auraPath = path.join(__dirname, 'pv-presets', 'aura').replace(/\\/g, '/');

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-primevue',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  primevue: {
    options: { unstyled: true, ripple: true },
    importPT: { as: 'Aura', from: auraPath },
    components: {
      // prefix: 'P',
      exclude: ['Editor', 'Chart']
    }
  },
})
