# CloudPeak Group - Official Website

Responsive static website for CloudPeak Group, providing strategic solutions in New Zealand. Built with Vite and vanilla JavaScript for optimal performance and clean code.

## 🌟 Features

- **Responsive Design**: Seamlessly works across desktop, tablet, and mobile devices
- **Modern Navigation**: Hamburger menu with smooth overlay transitions
- **Video Background**: Dynamic hero section with video background support
- **FOUC Prevention**: Comprehensive Flash of Unstyled Content prevention system
- **Chinese Interface**: Fully localized Chinese user interface
- **Performance Optimized**: Critical CSS inlining and optimized assets for fast loading
- **Clean URLs**: Professional URL structure without .html extensions

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
├── public/                      # Static assets
│   ├── background_video2.mp4    # Home page background video
│   ├── image1.jpg              # Page banner image
│   ├── JW_group_logo.jpg       # JW Group sponsor logo
│   ├── wine1.jpg               # Sponsor brand image 1
│   ├── wine2.jpg               # Sponsor brand image 2
│   ├── wechat-logo.png         # WeChat logo
│   ├── wechat-qrcode.jpg       # WeChat QR code
│   └── temp-icon.png               # Website icon
├── src/                        # Source files
│   ├── main.js                # Main JavaScript entry point
│   ├── style.css              # Global stylesheet
│   └── counter.js             # Legacy counter component
├── index.html                  # Home page
├── pages/                      # All other pages
│   ├── about.html              # About us page
│   ├── business-consulting.html # Business consulting page
│   ├── startup-guidance.html   # Startup guidance page
│   ├── education-consulting.html # Education consulting page
│   ├── immigration-consulting.html # Immigration consulting page
│   ├── ai-solutions.html      # AI solutions page
│   ├── our-values.html        # Company values page
│   └── contact.html           # Contact us page
├── templates/                  # Templates and reusable components
│   └── page-template.html     # Page template
├── vite.config.js             # Vite configuration
├── CLAUDE.md                  # Development guide
└── package.json               # Project configuration
```

## 🎯 Available Pages

- **Home (`/`)**: Hero section with video background and company branding
- **About Us (`/pages/about`)**: Company information and services overview
- **Business Consulting (`/pages/business-consulting`)**: New Zealand business consulting services
- **Startup Guidance (`/pages/startup-guidance`)**: Comprehensive startup support services
- **Education Consulting (`/pages/education-consulting`)**: K12 to PhD education planning services
- **Immigration Consulting (`/pages/immigration-consulting`)**: Immigration pathway guidance services
- **AI Solutions (`/pages/ai-solutions`)**: Enterprise-level AI implementation services
- **Our Values (`/pages/our-values`)**: Company values and philosophy
- **Contact Us (`/pages/contact`)**: Contact information with email and WeChat

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
- **New Zealand Business Consulting**: Market entry and business setup guidance
- **New Zealand Startup Guidance**: Comprehensive startup support services
- **New Zealand Education Consulting**: K12 to PhD education planning
- **New Zealand Immigration Consulting**: Immigration pathway professional guidance
- **Enterprise-level AI Solutions**: Enterprise AI implementation solutions

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

### GitHub Pages with Custom Domain
When using a custom domain, the Vite config is set to `base: '/'` to ensure proper asset loading:

```javascript
// vite.config.js
export default defineConfig({
  base: '/', // Use root path for custom domains
  // ... other config
})
```

### Clean URL Support
The website supports clean URLs without .html extensions:
- `cloudpeak.co.nz/about` instead of `cloudpeak.co.nz/about.html`
- `cloudpeak.co.nz/contact` instead of `cloudpeak.co.nz/contact.html`

### Recommended Hosting
- **GitHub Pages** (with custom domain support)
- Netlify
- Vercel
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