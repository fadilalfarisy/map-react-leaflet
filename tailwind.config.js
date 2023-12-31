/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['12px', '16px'],
      base: ['14px', '20px'],
      lg: ['16px', '19.5px'],
      xl: ['18px', '21.94px'],
      '2xl': ['20px', '24.38px'],
      '3xl': ['24px', '29.26px'],
      '4xl': ['48px', '58px'],
      '8xl': ['48px', '58px'],
    },
    extend: {
      maxWidth: {
        'image': '200px',
      },
      minWidth: {
        'image': '200px',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "unique-blue": "rgba(5, 15, 110, 0.68)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}