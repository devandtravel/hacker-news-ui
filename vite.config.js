import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from 'vite-preset-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()]
})
