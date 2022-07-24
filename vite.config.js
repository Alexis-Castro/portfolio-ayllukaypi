import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portafolio-virtual/",
  plugins: [react()],
  server: {
    host: true
  },
})
