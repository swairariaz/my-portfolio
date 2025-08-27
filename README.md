# Swaira Riaz — AI Engineer Portfolio

A modern, responsive portfolio website showcasing my expertise in **Artificial Intelligence, Machine Learning, and Deep Learning engineering**.

![Portfolio](https://img.shields.io/badge/Portfolio-AI%2520Engineer-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

---

## 🌟 Features
- **Modern Design**: Cyber-inspired aesthetic with gradient accents and smooth animations  
- **Fully Responsive**: Optimized for mobile, tablet, and desktop  
- **Performance Optimized**: Fast loading times and smooth interactions  
- **Interactive Elements**: Hover effects, typewriter animation, and modal dialogs  
- **Professional Content**: AI projects, technical skills, and experience  

---

## 🛠️ Tech Stack
- **Framework**: React 18.2.0 + TypeScript  
- **Styling**: Tailwind CSS 3.3.0  
- **Icons**: Lucide React  
- **Animations**: AOS (Animate On Scroll)  
- **Deployment**: Vercel / Netlify ready  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+  
- npm or yarn  

### Installation
```bash
# Clone the repository
git clone https://github.com/swairariaz/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server (Vite)
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Serve (Vite)
```bash
# Build for production
npm run build

# Local production preview
npm run preview
```

### Scripts (adjust if your tooling differs)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview --port 3000",
    "//nextjs-dev": "next dev",
    "//nextjs-build": "next build && next export",
    "//nextjs-start": "next start",
    "//cra-dev": "react-scripts start",
    "//cra-build": "react-scripts build",
    "//cra-serve": "npx serve -s build -l 3000"
  }
}
```
> If you're using **Next.js**, replace the Vite scripts with the `next*` versions. For **Create React App**, use the `react-scripts*` versions.

---

## 📱 Sections

1. **Hero Section**
   - Typewriter intro, social links, resume download  
   - Animated profile picture with cyber elements  

2. **About Section**
   - Professional background, education timeline, achievements  

3. **Skills Section**
   - Interactive categories, proficiency indicators, tech cloud  
   - Responsive skill cards  

4. **Projects Section**
   - Filterable gallery, detailed modals  
   - Tech stacks, achievements, GitHub & demo links  

5. **Contact Section**
   - Contact form with validation, direct email, social links  

---

## 🎨 Customization

### Update Personal Information
- **Profile Data**: Edit files in `src/data/`  
- **Images**: Replace `public/profile_picture.jpg` with your photo  
- **Colors**: Update Tailwind classes or extend the theme

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        accent: '#your-accent-color',
      }
    }
  }
}
```

### Example: Typewriter Hook Usage
```ts
// src/hooks/useTypewriter.ts (example signature)
export function useTypewriter(words: string[], speed = 100) { /* ... */ }
```
```tsx
// Example usage
const titles = ['AI Engineer', 'ML Researcher', 'Deep Learning Enthusiast'];
const text = useTypewriter(titles, 80);
```

---

## 📊 Performance Optimization
- Lazy loading for images  
- Component code splitting  
- Optimized animations  
- Minimized bundle size  
- Responsive image handling  

---

## 🌐 Deployment

### Vercel (Vite)
1. **Connect Repository** to Vercel  
2. **Build Command**: `npm run build`  
3. **Output Directory**: `dist`  
4. **Install Command**: `npm install`  
5. Deploy — automatic on `git push`

### Netlify (Vite)
- **Build Command**: `npm run build`  
- **Publish Directory**: `dist`  
- Drag & drop the `dist` folder **or** connect your repo for CI/CD

### Other Static Hosts
```bash
npm run build
```
Deploy the contents of the `dist/` folder.

---

## 📈 SEO Optimization
- Semantic HTML structure  
- Meta tags for social sharing  
- Open Graph optimization  
- JSON-LD structured data  
- Alt tags for images  

**JSON-LD Example**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Swaira Riaz",
  "jobTitle": "AI Engineer",
  "url": "https://swairariaz.github.io",
  "sameAs": [
    "https://www.linkedin.com/in/swaira-riaz-4b946330a/"
  ]
}
</script>
```

---

## 🤝 Contributing
1. Fork the project  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

---

## 🙏 Acknowledgments
- Design inspiration from modern AI/tech portfolios  
- Icons by **Lucide**  
- Animations using **AOS**  

---

## 📞 Contact
**Swaira Riaz** — swairariaz101@gmail.com  
**Portfolio**: https://swairariaz.github.io/my-portfolio/  
**LinkedIn**: https://www.linkedin.com/in/swaira-riaz-4b946330a/  

> ⭐ If this project helps you, please **star the repo**!
