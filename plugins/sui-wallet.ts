import SuiWallet from "./sui-wallet/src/main"
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(SuiWallet)
})