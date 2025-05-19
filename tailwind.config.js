/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if your structure is different
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D94141',
        secondary: '#2B2B2B',
        highlight: '#6BAE4F',
        offwhite: '#F5E6DA',
        accent: '#F2C14E',
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        heading: ['"Bebas Neue"', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
