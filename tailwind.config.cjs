/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00', // VokaFit Orange
          50: '#FFF0E0',
          100: '#FFE1C2',
          200: '#FFC285',
          300: '#FFA347',
          400: '#FF850A',
          500: '#FF6B00',
          600: '#CC5600',
          700: '#994000',
          800: '#662B00',
          900: '#331500',
        },
        secondary: {
          DEFAULT: '#1E293B', // Slate 800
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}