/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#2ee5d8',
        'azul-oscuro': '#062e51',
      },
      backgroundImage: {
        'logo-page': "url('/src/assets/img/logos.svg')",
      }
    },
  },
  plugins: [],
}
