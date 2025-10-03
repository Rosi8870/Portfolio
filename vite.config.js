import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // FIX: Change to relative path (./) for reliable asset loading on GitHub Pages.
  base: './', 
  plugins: [react()],
})