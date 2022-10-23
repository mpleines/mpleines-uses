/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      white: '#fff',
      black: '#000',
      darkGrey: '#242424',
      blue: '#246EB9',
      red: '#FF6B6C',
      silver: '#C0C0C0',
    },
  },
  plugins: [],
};
