import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugin = {
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true
  },
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    short_name: 'StroPass',
    name: 'StroPass',
    icons: [
      {
        src: '/passStrong.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        src: '/passStrong.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    id: '/?source=pwa',
    start_url: '/?source=pwa',
    background_color: '#134b5f',
    display: 'standalone',
    scope: '/',
    splashScreens: [
      {
        src: '/passStrong.png',
        sizes: '1024x1024',
      },
    ],
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});