import { defineConfig } from 'vite'
import { resolve } from 'path' // only needed if you keep the multi-page input below

export default defineConfig({
  base: '/cloudpeak-website-static/',

  build: {
    cssCodeSplit: true,
    manifest: true,
    sourcemap: false,
      output: {
        manualChunks: {
          vendor: ['./src/main.js']
        }
      }
    },
    cssMinify: true
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

  assetsInclude: ['**/*.mp4', '**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif', '**/*.svg']

  // Enable experimental features for better performance
  /*
  experimental: {
    renderBuiltUrl: (filename) => {
      return `/${filename}`
    }
  }
  */
})
