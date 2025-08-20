import './style.css'

class Navigation {
  constructor() {
    this.hamburger = document.getElementById('hamburger')
    this.navOverlay = document.getElementById('nav-overlay')
    this.navClose = document.getElementById('nav-close')
    this.logoBtn = document.getElementById('logo-btn')
    
    this.init()
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
    window.location.href = '/index.html'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Navigation()
})
