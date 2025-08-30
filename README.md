# CloudPeak Group - Official Website

Responsive static website for CloudPeak Group (云岫国际), providing strategic solutions in New Zealand. Built with Vite and vanilla JavaScript for optimal performance and clean code.

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
├── public/                      # 静态资源
│   ├── background_video2.mp4    # 首页背景视频
│   ├── image1.jpg              # 页面横幅图片
│   ├── wine1.jpg               # 赞助品牌图片1
│   ├── wine2.jpg               # 赞助品牌图片2
│   ├── wechat-logo.png         # 微信标志
│   ├── wechat-qrcode.jpg       # 微信二维码
│   └── vite.svg               # 网站图标
├── src/                        # 源文件
│   ├── main.js                # 主JavaScript入口
│   ├── style.css              # 全局样式文件
│   └── counter.js             # 遗留计数器组件
├── index.html                  # 首页
├── about.html                  # 关于我们
├── business-consulting.html    # 商业咨询
├── startup-guidance.html       # 创业指导
├── education-consulting.html   # 教育咨询
├── immigration-consulting.html # 移民咨询
├── ai-solutions.html          # AI解决方案
├── our-values.html            # 公司价值观
├── contact.html               # 联系我们
├── page-template.html         # 页面模板
├── vite.config.js             # Vite配置
├── CLAUDE.md                  # 开发指南
└── package.json               # 项目配置
```

## 🎯 Available Pages

- **Home (`/`)**: Hero section with video background and company branding
- **About Us (`/about`)**: Company information and services overview
- **Business Consulting (`/business-consulting`)**: New Zealand business consulting services
- **Startup Guidance (`/startup-guidance`)**: Comprehensive startup support services
- **Education Consulting (`/education-consulting`)**: K12 to PhD education planning services
- **Immigration Consulting (`/immigration-consulting`)**: Immigration pathway guidance services
- **AI Solutions (`/ai-solutions`)**: Enterprise-level AI implementation services
- **Our Values (`/our-values`)**: Company values and philosophy
- **Contact Us (`/contact`)**: Contact information with email and WeChat

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

CloudPeak Group (云岫国际) provides:
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