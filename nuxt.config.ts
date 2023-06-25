// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [`~/style.css`],
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts',],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap"
        }
      ]
    }
  },
  googleFonts: {
    display: 'swap',
    inject: true,
    download: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Jura: {
        wght: [300, 400, 500, 600, 700],
      },
    }
  },
})
