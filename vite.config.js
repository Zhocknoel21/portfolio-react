import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` must match your GitHub repo name so assets load on GitHub Pages:
// https://zhock19.github.io/portfolio-2--SALE/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-react/',
});
