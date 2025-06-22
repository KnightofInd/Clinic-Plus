# Setup Instructions

1. Install the required dependencies:
```bash
npm install @heroicons/react
```

2. Required Images:
Place the following images in the public folder:
- doctor-hero.jpg (A professional photo of a doctor or medical team)
- doctor-profile.jpg (A professional headshot of a doctor)

You can use placeholder images from Unsplash.com with medical/healthcare themes:
- For doctor-hero.jpg: https://unsplash.com/photos/medical-team
- For doctor-profile.jpg: https://unsplash.com/photos/doctor-portrait

3. Update globals.css:
Add the following styles to your globals.css file:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 255, 255, 255;
  --background-end-rgb: 255, 255, 255;
}

body {
  font-family: 'Inter', sans-serif;
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      rgb(var(--background-start-rgb)),
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Transition Styles */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
```

4. Optional: Update tailwind.config.js to extend the theme:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#4A90E2',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
}
```
