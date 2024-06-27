import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Se importa modulo de path


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //Se configura Alias para importaciones
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
})
