import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

function htmlInputs() {
  const inputs = {}
  for (const f of fs.readdirSync(__dirname)) {
    if (f.endsWith('.html') && f !== '404.html') {
      inputs[f.replace(/\.html$/, '')] = resolve(__dirname, f)
    }
  }
  return inputs
}

export default defineConfig({
  base: '/cloudpeak-website-static/',

  build: {
    emptyOutDir: true,
    sourcemap: false,
    manifest: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: htmlInputs(),
      output: {
        manualChunks: {
          vendor: ['./src/main.js'] 
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
