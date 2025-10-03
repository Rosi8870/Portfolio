import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define the public base path for GitHub Pages deployment.
// Using the repository name ensures all assets (including main.jsx) 
// are loaded from the correct subdirectory.
export default defineConfig({
  // Use the repository name as the base path for assets
  base: '/ROSHINTH-SOJAN-PORTFOLIO/', 
  plugins: [react()],
})