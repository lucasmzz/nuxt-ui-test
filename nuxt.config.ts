import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vite: {
    plugins: [svgLoader()],
  },
  modules: ["@nuxt/fonts", "@nuxt/ui"],
  colorMode: {
    preference: "dark",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
