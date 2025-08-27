/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradientShift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      colors: {
        'ai-primary': '#6366f1',
        'ai-secondary': '#8b5cf6',
        'ai-accent': '#06b6d4',
        'ai-dark': '#0f172a',
        'ai-mid': '#1e293b',
        'ai-light': '#f1f5f9',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Plus Jakarta Sans', 'sans-serif'],
        'mono': ['Space Grotesk', 'monospace'],
      }
    },
  },
  plugins: [],
}