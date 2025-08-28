# 🌟 Bright Brand Studio

**Ethical Brand Strategy & Sustainable Marketing**

A modern, responsive website for Audrey Meaulard's brand strategy consultancy, helping conscious businesses in Australia build authentic, sustainable brands that make a positive impact.

---

## 📋 About

After several years working in ethical fashion and brand marketing — from co-founding a circular fashion brand to leading strategy for sustainable concept stores — Audrey realized that most mission-driven brands don't need more content. **They need clarity.**

Bright Brand Studio offers a strategic framework to help businesses:
- Root their vision
- Align their voice
- Grow without compromising their values

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- **Image Optimization**: [React Lazy Load](https://github.com/Aljullu/react-lazy-load-image-component) - Lazy loading for better performance
- **Routing**: [React Router DOM](https://reactrouter.com/) - Declarative routing for React
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling

---

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Static Site Export** - Fast loading times with pre-built pages
- **SEO Optimized** - Complete meta tags and social media integration
- **Google Analytics** - Built-in tracking and analytics
- **Performance Optimized** - Lazy loading images and compressed assets
- **Accessible** - Semantic HTML and proper contrast ratios

---

## 🎨 Design System

### Color Palette
```css
:root {
  --color-cream: #f5f0e9;
  --color-blue: #2b59c3;
  --color-orange: #f98948;
  --color-brown: #433123;
  --color-purple: #d4d3ea;
}
```

### Typography
- **Primary Font**: Montserrat (300, 400, 500, 600, 700)
- **Accent Font**: Chango (for headings)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lydoww/BBStudio-NextJs.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `out/` directory, ready for static hosting.

### Deploy to Static Hosting
The site is configured for static export and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting provider

Simply upload the contents of the `out/` directory to your hosting provider.

---

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://brightbrandstudio.com.au
```

### Next.js Configuration
The project uses static export configuration in `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    qualities: [25, 50, 75, 85, 100],
  },
};
```

---

## 🎯 Key Features Implementation

### Custom 404 Handling
- Static 404 page without navigation bar
- Apache `.htaccess` configuration for proper error handling
- Responsive design matching brand identity

### Performance Optimization
- Image lazy loading and optimization
- CSS and JavaScript compression
- Static asset caching via `.htaccess`
- Minified production builds

### SEO & Social Media
- Complete Open Graph meta tags
- Twitter Card integration
- LinkedIn optimization
- Structured data markup

## 📞 Contact

**Audrey Meaulard** - Brand Strategist  
Website: [brightbrandstudio.com.au](https://brightbrandstudio.com.au)

---

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

<div align="center">

**Built with ❤️ for conscious businesses making a positive impact**

[Visit Website](https://brightbrandstudio.com.au) • [Contact Audrey](mailto:contact@brightbrandstudio.com.au)

</div>
