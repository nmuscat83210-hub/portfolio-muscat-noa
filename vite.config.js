import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // Chemin de base : '/' (Netlify, Vercel, domaine perso) ou '/portfolio-muscat-noa/' (GitHub Pages)
  base: process.env.BASE_PATH || '/',
  logLevel: 'error',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
});
