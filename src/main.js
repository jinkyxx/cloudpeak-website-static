import './style.css'

class Navigation {
  constructor() {
    this.hamburger = document.getElementById('hamburger')
    this.navOverlay = document.getElementById('nav-overlay')
    this.navClose = document.getElementById('nav-close')
    this.logoBtn = document.getElementById('logo-btn')
    
    this.init()
    this.initSmoothNavigation()
  }
  
  init() {
    this.hamburger.addEventListener('click', () => this.openMenu())
    this.navClose.addEventListener('click', () => this.closeMenu())
    this.logoBtn.addEventListener('click', () => this.goHome())
    
    this.navOverlay.addEventListener('click', (e) => {
      if (e.target === this.navOverlay) {
        this.closeMenu()
      }
    })
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.navOverlay.classList.contains('active')) {
        this.closeMenu()
      }
    })
  }
  
  initSmoothNavigation() {
    // Add smooth navigation for all internal links
    const navLinks = document.querySelectorAll('a[href*=".html"]')
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.handleNavigation(e, link.href)
      })
    })
  }
  
  handleNavigation(e, href) {
    // Check if it's an internal navigation
    if (href.includes(window.location.origin)) {
      e.preventDefault()
      this.navigateWithPreload(href)
    }
  }
  
  async navigateWithPreload(href) {
    try {
      // Show loading state
      document.body.classList.add('page-loading')
      
      // Preload the destination page
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = href
      document.head.appendChild(link)
      
      // Small delay to ensure smooth transition
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // Navigate to the page
      window.location.href = href
    } catch (error) {
      // Fallback to normal navigation
      window.location.href = href
    }
  }
  
  openMenu() {
    this.navOverlay.classList.add('active')
    document.body.classList.add('nav-open')
    document.body.style.overflow = 'hidden'
  }
  
  closeMenu() {
    this.navOverlay.classList.remove('active')
    document.body.classList.remove('nav-open')
    document.body.style.overflow = 'auto'
  }
  
  goHome() {
    this.navigateWithPreload('/index.html')
  }
}

// Prevent FOUC by ensuring styles are loaded
function ensureStylesLoaded() {
  return new Promise((resolve) => {
    if (document.styleSheets.length > 0) {
      resolve()
    } else {
      const checkStyles = () => {
        if (document.styleSheets.length > 0) {
          resolve()
        } else {
          requestAnimationFrame(checkStyles)
        }
      }
      checkStyles()
    }
  })
}

// Initialize when DOM and styles are ready
document.addEventListener('DOMContentLoaded', async () => {
  // Ensure styles are loaded before showing content
  await ensureStylesLoaded()
  
  // Remove any loading classes
  document.body.classList.remove('page-loading')
  document.body.classList.add('page-loaded')
  
  // Initialize navigation
  new Navigation()
})
