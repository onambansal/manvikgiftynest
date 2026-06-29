import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static SPA — no backend, no proxy needed.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
