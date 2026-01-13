/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system tokens
        border: 'hsl(240 5.9% 90%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(240 10% 3.9%)',
        // Primary Colors
        'charcoal': '#0B0D10',
        'graphite': '#151820',
        'steel': '#2A2F3A',
        // Text Colors
        'soft-white': '#E6EAF0',
        'muted-grey': '#9AA3B2',
        // Accent Color (Electric Cyan)
        'accent': '#3CF2FF',
      },
      fontFamily: {
        // Heading font for that sharp futuristic look
        heading: ['Orbitron', 'Space Grotesk', 'system-ui', 'sans-serif'],
        // Body font
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(60, 242, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(60, 242, 255, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
