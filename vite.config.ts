import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
// import { readFileSync } from 'fs';

import react from '@vitejs/plugin-react'
// import path from 'path';
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
/*     https: {
      key: readFileSync(path.resolve(__dirname, 'certs', 'key.pem')),
      cert: readFileSync(path.resolve(__dirname, 'certs', 'cert.pem'))
    } */
  },
  plugins: [
    react(),
    VitePWA({
      strategies: 'generateSW',
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        lang: 'en',
        name: 'Vite + React',
        short_name: 'Vite + React',
        description: 'Vite + React + PWA',
        theme_color: '#000000',
        background_color: '#ffffff',
        icons: [
          {
            src: 'vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'maskable any'
          },
          {
            src: 'vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'vite.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ],
      },
    }),
  ],
})
