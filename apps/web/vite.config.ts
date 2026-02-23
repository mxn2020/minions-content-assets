import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-content-assets/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/content-assets/, /node_modules/],
        },
    },
});
