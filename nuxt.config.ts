// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/eslint', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n/i18n.config.ts',
  },
  compatibilityDate: '2024-12-19',
  devtools: { enabled: true },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
