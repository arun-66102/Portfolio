/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#1a0b2e',
          100: '#2d1b69',
          200: '#4027a3',
          300: '#5333dd',
          400: '#6b3fff',
          500: '#8b5cf6',
          600: '#a78bfa',
          700: '#c4b5fd',
          800: '#e0d7ff',
          900: '#f3efff',
        },
        secondary: {
          50: '#000000',
          100: '#0a0a0a',
          200: '#141414',
          300: '#1a1a1a',
          400: '#262626',
          500: '#404040',
          600: '#525252',
          700: '#737373',
          800: '#a3a3a3',
          900: '#d4d4d4',
        },
        accent: {
          50: '#1e0b3d',
          100: '#3d1f7a',
          200: '#5c33b7',
          300: '#7b47f4',
          400: '#9a5bff',
          500: '#b366ff',
          600: '#cc7dff',
          700: '#e594ff',
          800: '#f0bbff',
          900: '#f8ddff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
