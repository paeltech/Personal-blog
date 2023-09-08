// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      'Reenie+Beanie': true,
      'DM+Sans': {
        wght: [300, 600],
        ital: [200],
      },
    },
  },
  target: 'static',
});
