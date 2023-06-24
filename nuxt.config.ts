// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [`~/style.css`],
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',
    families: {
      Inter: [100,200,300,400,500,600,700,800,900],
      Jura: {
        wght: [300,400,500,600,700],
      },
    }
  },
})
