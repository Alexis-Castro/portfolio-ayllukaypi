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
        'logo-page': "url('/assets/img/logos.svg')",
        'corte-page': "url('/assets/img/corte.svg')",
        'logo-cyan': "url('/assets/img/logos-cyan-transparent.svg')",
        'ubicacion-page': "url('/assets/img/fachada.png')",
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      // 'serif': ['Inter var', 'serif'],
      // 'monospace': ['Inter var', 'monospace'],
    }
  },
  plugins: [],
}
