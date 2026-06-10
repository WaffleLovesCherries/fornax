import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas para que funcione bajo cualquier nombre de repo en GitHub Pages
  base: './',
  plugins: [react()],
})
