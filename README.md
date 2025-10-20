# Ostuni Restaurant

A modern, responsive website for Ostuni Restaurant - an authentic Italian restaurant located in Putney, London. Built with vanilla HTML, CSS, and JavaScript, featuring a clean design and smooth user experience.

## 🍝 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, elegant design with smooth animations and transitions
- **Interactive Navigation**: Sticky navbar with logo swapping and mobile menu
- **Parallax Effects**: Subtle parallax scrolling for enhanced visual appeal
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lazy loading, image preloading, and optimized scroll handling
- **Contact Forms**: Newsletter subscription and reservation booking forms

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, but recommended for development)

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 📁 Project Structure

```
ostuni-v0/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
├── images/             # Image assets
│   ├── hero-*.webp     # Hero section images (responsive)
│   ├── card1-*.webp    # Feature card images
│   ├── logo-*.png      # Logo variations
│   ├── history.jpeg    # About section image
│   ├── events.jpeg     # Events section image
│   ├── location.png    # Location card image
│   └── garden.webp     # Garden card image
└── README.md           # This file
```

## 🎨 Design Features

### Color Palette
- **Background**: `#faf9f6` (Warm white)
- **Foreground**: `#1a1a1a` (Dark gray)
- **Accent**: `#c9a961` (Gold)
- **Neutral Dark**: `#2a2a2a`
- **Dark Blue**: `#1c2833`

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body Text**: Inter (sans-serif)

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1280px`
- Desktop: `> 1280px`

## 🔧 Technical Details

### HTML Structure
- Semantic HTML5 elements
- Proper heading hierarchy (h1-h4)
- ARIA labels and roles for accessibility
- Meta tags for SEO and viewport configuration

### CSS Features
- CSS Custom Properties (variables)
- Flexbox and Grid layouts
- Smooth transitions and animations
- Responsive design with media queries
- Custom scrollbar styling

### JavaScript Functionality
- **Navbar**: Sticky navigation with logo swapping
- **Parallax**: Smooth parallax scrolling effects
- **Mobile Menu**: Hamburger menu with smooth animations
- **Forms**: Newsletter and reservation form handling
- **Smooth Scroll**: Anchor link navigation
- **Performance**: Optimized scroll handling with `requestAnimationFrame`

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Performance Features

- **Image Optimization**: WebP format with responsive images
- **Lazy Loading**: Non-critical images load on demand
- **Preloading**: Critical images preloaded for faster rendering
- **Optimized Scrolling**: Throttled scroll events for smooth performance
- **Minimal Dependencies**: No external frameworks, pure vanilla code

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations
- **Alt Text**: Descriptive alt text for all images

## 📋 Sections

1. **Hero Section**: Eye-catching landing area with parallax background
2. **Feature Cards**: Three interactive cards showcasing key features
3. **About Section**: Restaurant history and story
4. **Menu Section**: Sample menu items and descriptions
5. **Private Events**: Information about hosting private events
6. **Reservations**: Contact information and booking form
7. **Newsletter**: Email subscription form
8. **Footer**: Links and contact information

## 🛠️ Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
  --background: #faf9f6;
  --foreground: #1a1a1a;
  --accent: #c9a961;
  /* ... other colors */
}
```

### Images
Replace images in the `images/` folder:
- `hero-*.webp`: Hero section backgrounds
- `card1-*.webp`: Feature card images
- `logo-*.png`: Logo variations
- Other section images as needed

### Content
Update text content directly in `index.html`:
- Restaurant name and tagline
- Menu items and descriptions
- Contact information
- About section text

## 📞 Contact Information

- **Address**: 123 Putney High Street, London, SW15 1SL
- **Phone**: 020 1234 5678
- **Email**: reservations@ostuni-restaurant.com
- **Hours**: Tuesday - Sunday: 6:00 PM - 11:00 PM (Closed Mondays)

## 📄 License

This project is for demonstration purposes. All rights reserved.

## 🤝 Contributing

This is a static website project. For updates or modifications:
1. Edit the HTML, CSS, or JavaScript files
2. Test across different browsers and devices
3. Ensure accessibility standards are maintained
4. Optimize images and performance as needed

## 📝 Notes

- The website uses Tailwind CSS via CDN for utility classes
- Google Fonts are loaded for typography
- All images should be optimized for web use
- Consider implementing a backend for form submissions in production
- Add analytics tracking as needed for production deployment

---

**Built with ❤️ for Ostuni Restaurant**
