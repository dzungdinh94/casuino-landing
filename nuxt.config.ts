// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [`~/style.css`, `@/assets/css/main.css`],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap"
        }
      ]
    }
  },

})
