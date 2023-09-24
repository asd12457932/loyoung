/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/1-gap-6': 'calc(100% - 1.5rem)',
        '1/2-gap-6': 'calc(50% - 1.5rem)',
        '1/3-gap-6': 'calc(33.333333% - 1.5rem)',
        '1/4-gap-6': 'calc(25% - 1.5rem)',
        '1/5-gap-6': 'calc(20% - 1.5rem)',
      },
    },
  },
  plugins: [],
}