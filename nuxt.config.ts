export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxtjs/cloudinary",
    "nuxt-auth-utils",
    "nuxt-tiptap-editor",
  ],
  runtimeConfig: {
    githubId: "",
    githubSecret: "",
  },

  // เพิ่มส่วนนี้เข้าไป
  vite: {
    optimizeDeps: {
      exclude: ["@prisma/client"],
    },
  },

  nitro: {
    externals: {
      inline: ["@prisma/client"],
    },
  },
});
