import { defineConfig } from 'vite';

export default defineConfig({
  build: { outDir: 'dist' },
  // Ensure relative paths for assets
  base: './',
});
