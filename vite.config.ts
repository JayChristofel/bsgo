import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['@radix-ui/react-slot', '@radix-ui/react-dropdown-menu'], // Add problematic deps here
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  },
  server: {
    hmr: {
      overlay: false // Disable overlay for minor warnings
    }
  }
})
