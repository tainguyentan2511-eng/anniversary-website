/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#D4AF37',
        'luxury-cream': '#F9F6EE',
        'luxury-black': '#1A1A1A',
        'blush': '#FFF4F7',
        'deep-rose': '#9F4C61',
        'rose-gold': {
          DEFAULT: '#B76E73',
          light: '#E5B5B8',
          dark: '#8C4D51',
        },
        'silk': '#F3E5AB',
      },
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'elegant': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grain-pattern': "url('/noise.png')",
        'radial-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(26,26,26,0.25) 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
        'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}