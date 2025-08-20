import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Needed because this repo is served from a subpath on GitHub Pages
  base: '/cloudpeak-website-static/',

  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
    manifest: true,
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      input: {
        index:       resolve(__dirname, 'index.html'),
        about:       resolve(__dirname, 'about.html'),
        business:    resolve(__dirname, 'business-consulting.html'),
        education:   resolve(__dirname, 'education-consulting.html'),
        immigration: resolve(__dirname, 'immigration-consulting.html'),
        startup:     resolve(__dirname, 'startup-guidance.html'),
        template:    resolve(__dirname, 'page-template.html')
      },
      output: {
        manualChunks: {
          vendor: ['./src/main.js']   // bundle main.js separately
        }
      }
    }
  },

  server: {
    https: false,
    hmr: { overlay: false }
  },

  css: {
    modules: false,
    postcss: {},
    devSourcemap: false
  },

  assetsInclude: [
    '**/*.mp4',
    '**/*.jpg',
    '**/*.png',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.svg'
  ]
})
