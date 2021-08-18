import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import ViteComponents,  { VuetifyResolver }  from 'vite-plugin-components'
import { VitePWA } from 'vite-plugin-pwa'

import path from 'path'
const srcPath = path.resolve(__dirname, 'assets', 'variables.scss')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VitePWA(),
    Pages(), 
    Layouts(),
    ViteComponents({
      //customComponentResolvers: [VuetifyResolver()]
    })
  ],
  define: { 'process.env': {} },
  css: {
    preprocessorOptions: {
      // sass: { additionalData: `@import ${srcPath}\n` },
      scss: { additionalData: `@import ${srcPath};\n` },
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
