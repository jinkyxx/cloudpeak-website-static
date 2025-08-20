import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cloudpeak-website-static/',
  
  // Optimize build for better loading performance
  build: {
    // Enable CSS code splitting for better loading
    cssCodeSplit: true,
    // Generate manifest for better caching
    manifest: true,
    rollupOptions: {
      // Separate chunks for better caching
      output: {
        manualChunks: {
          vendor: ['./src/main.js']
        }
      }
    },
    // Optimize CSS minification
    cssMinify: true,
    // Enable source maps for debugging
    sourcemap: false
  },
  
  // Development server configuration
  server: {
    // Enable HTTP/2 for faster loading
    https: false,
    // Optimize for faster reloads
    hmr: {
      overlay: false
    }
  },
  
  // CSS configuration for better loading
  css: {
    // Enable CSS modules if needed
    modules: false,
    // PostCSS configuration
    postcss: {},
    // Optimize CSS loading
    devSourcemap: false
  },
  
  // Optimize asset handling
  assetsInclude: ['**/*.mp4', '**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  
  // Enable experimental features for better performance
  /*
  experimental: {
    renderBuiltUrl: (filename) => {
      return `/${filename}`
    }
  }
  */
})
