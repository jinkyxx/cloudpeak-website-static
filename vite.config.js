import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

function htmlInputs() {
  const inputs = {}

  // Add root HTML files (except 404.html which is handled separately)
  for (const f of fs.readdirSync(__dirname)) {
    if (f.endsWith('.html') && f !== '404.html') {
      inputs[f.replace(/\.html$/, '')] = resolve(__dirname, f)
    }
  }

  // Add pages directory HTML files
  const pagesDir = resolve(__dirname, 'pages')
  if (fs.existsSync(pagesDir)) {
    for (const f of fs.readdirSync(pagesDir)) {
      if (f.endsWith('.html')) {
        inputs[`pages/${f.replace(/\.html$/, '')}`] = resolve(pagesDir, f)
      }
    }
  }

  return inputs
}

export default defineConfig({
  base: '/',

  plugins: [
    // Copy GitHub Pages files to dist
    {
      name: 'copy-github-pages-files',
      generateBundle() {
        // Copy 404.html
        if (fs.existsSync('404.html')) {
          this.emitFile({
            type: 'asset',
            fileName: '404.html',
            source: fs.readFileSync('404.html', 'utf8')
          })
        }

        // Copy .nojekyll
        if (fs.existsSync('.nojekyll')) {
          this.emitFile({
            type: 'asset',
            fileName: '.nojekyll',
            source: fs.readFileSync('.nojekyll', 'utf8')
          })
        }
      }
    }
  ],

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
