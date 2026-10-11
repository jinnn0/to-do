import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from GitHub Pages at https://jinnn0.github.io/to-do/
  base: '/to-do/',
  // Kept as build/ (Create React App's folder) so `npm run deploy` is unchanged.
  build: { outDir: 'build' },
  server: { port: 3000 }
});
