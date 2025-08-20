# CloudPeak Group - Static Website

A responsive static website for CloudPeak Group, a consulting company providing strategic solutions in New Zealand. Built with Vite and vanilla JavaScript for optimal performance and clean code.

## 🌟 Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern Navigation**: Hamburger menu with smooth overlay transitions
- **Video Background**: Dynamic hero section with video background support
- **FOUC Prevention**: Comprehensive Flash of Unstyled Content prevention system
- **Multi-language Support**: English and Chinese content throughout
- **Performance Optimized**: Fast loading with critical CSS inlining and optimized assets

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cloudpeak-website-static
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
cloudpeak-website-static/
├── public/                 # Static assets
│   ├── backgound_video.mp4 # Hero background video
│   ├── image1.jpg          # About page banner image
│   └── vite.svg           # Favicon
├── src/                    # Source files
│   ├── main.js            # Main JavaScript entry point
│   ├── style.css          # Global styles
│   └── counter.js         # Legacy counter component
├── index.html             # Home page
├── about.html             # About Us page
├── page-template.html     # Template for new pages
├── vite.config.js         # Vite configuration
├── CLAUDE.md              # Development guidance
└── package.json           # Project configuration
```

## 🎯 Available Pages

- **Home (`/`)**: Hero section with video background and company branding
- **About Us (`/about.html`)**: Company information and services overview

## 🛠 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Architecture

### Technology Stack
- **Build Tool**: Vite 7.x
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: CSS with custom properties and responsive design
- **Assets**: Video backgrounds, optimized images

### Key Components
- **Navigation System**: Responsive hamburger menu with overlay
- **FOUC Prevention**: Advanced system to prevent unstyled content flash
- **Responsive Grid**: CSS Grid layouts for content sections
- **Video Integration**: Autoplay, muted, looping background videos

### Performance Features
- Critical CSS inlining for immediate rendering
- Optimized asset loading with proper caching
- Smooth page transitions without FOUC
- Mobile-first responsive design approach

## 📝 Creating New Pages

Use the provided `page-template.html` as a starting point for new pages:

1. Copy `page-template.html` to your new page name (e.g., `services.html`)
2. Update the `<title>` tag
3. Add page-specific critical CSS in the `<style>` section
4. Add your content in the designated area
5. Update navigation links as needed

### Critical CSS Guidelines
Always include these critical styles for FOUC prevention:
- Base reset styles (`*, body, #app`)
- Navigation styles (`.nav, .hamburger, .logo-btn`)
- Page-specific layout styles (`.hero` for home, `.page-banner` for others)

## 🎯 Services Offered

CloudPeak Group provides:
- **Business Consulting** (新西兰商业咨询): Market entry and business setup
- **Startup Guidance** (新西兰创业指导): Comprehensive startup support
- **Education Consulting** (新西兰教育咨询): K12 to PhD education planning
- **Immigration Consulting** (新西兰移民咨询): Immigration pathway guidance
- **AI Solutions** (企业级AI解决方案): Enterprise-level AI implementations

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🔧 Configuration

### Vite Configuration
The project includes optimized Vite configuration for:
- CSS code splitting
- Asset optimization
- Development server settings
- Build optimizations

### Environment Variables
Currently no environment variables are required for basic operation.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Test responsive design across different screen sizes
3. Ensure FOUC prevention is maintained for new pages
4. Update this README if adding new features or pages

## 📧 Contact

For questions about CloudPeak Group services, please visit the website or contact through the provided channels.

## 📄 License

This project is proprietary to CloudPeak Group. All rights reserved.