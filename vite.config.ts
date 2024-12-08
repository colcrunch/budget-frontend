import { defineConfig } from 'vite'
import {resolve} from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
