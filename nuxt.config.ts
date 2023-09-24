// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  imports: {
    dirs: ["./stores", "./api"],
  },
  css: ["@/assets/styles/main.scss"],
});
