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
        },
        neon: {
          cyan: '#00f5ff',
          pink: '#ff00e5',
          green: '#00ff88',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-up-delay': 'fade-in-up 0.6s ease-out 0.2s forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(139, 92, 246, 0.3)' },
          '50%': { borderColor: 'rgba(139, 92, 246, 0.7)' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}
