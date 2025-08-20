import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

function htmlInputs() {
  const root = __dirname
  const inputs = {}
  for (const f of fs.readdirSync(root)) {
    if (f.endsWith('.html') && f !== '404.html') {
      inputs[f.replace(/\.html$/, '')] = resolve(root, f)
    }
  }
  return inputs
}

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
      input: htmlInputs(),
      output: {
        manualChunks: { vendor: ['./src/main.js'] }
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
