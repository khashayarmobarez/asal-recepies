/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      lightPink: 'var(--light-pink)',       // #ec8291 - Base color
      darkRed: 'var(--dark-red)',           // #8b2a3b - Deep, dark red
      softPink: 'var(--soft-pink)',         // #f5b7c3 - Light, muted pink
      wineRed: 'var(--wine-red)',           // #a6294e - Wine-inspired dark red
      dustyRose: 'var(--dusty-rose)',       // #b3777b - Soft, dusty rose
      warmRose: 'var(--warm-rose)',         // #cc5660 - Warmer tone of rose
      softCream: 'var(--soft-cream)',       // #fbe8e9 - Soft, pale cream for lighter accents
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

