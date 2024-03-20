// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "shadcn-nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        preload: true,
        families: {
          "Open+Sans": [400, 700],
          Kurale: [400],
          Oswald: [700],
        },
      },
    ],
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
})
