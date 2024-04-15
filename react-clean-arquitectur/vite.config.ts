import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import * as path from 'path'
import EnvironmentPlugin from 'vite-plugin-environment'
import legacy from '@vitejs/plugin-legacy'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin('all'),
    legacy({
        targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: [
      { find: '@tailwind', replacement: path.resolve(__dirname, 'node_modules/tailwindcss') },
      { find: '@di', replacement: path.resolve(__dirname, 'src/di') },
      { find: '@domain', replacement: path.resolve(__dirname, 'src/domain') },
      { find: '@infrastructure', replacement: path.resolve(__dirname, 'src/infrastructure') },
      { find: '@application', replacement: path.resolve(__dirname, 'src/application') },
      { find: '@presentation', replacement: path.resolve(__dirname, 'src/presentation') },
      { find: '@core', replacement: path.resolve(__dirname, 'src/core') }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
