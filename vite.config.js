import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Alexis-Castro.github.io/portfolio-ayllukaypi/",
  plugins: [react()],
  server: {
    host: true
  },
})
