// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // FIX: Using './' forces asset paths to be relative to index.html,
  // which reliably fixes 404s on GitHub Pages subdirectories.
  base: './', 
  plugins: [react()],
})