/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#050505',
        'surface': '#0d0d0f',
        'surface-2': '#111113',
        'border-subtle': '#27272a',
        'border-mid': 'rgba(255,255,255,0.1)',
        'accent-green': '#25D366',
        'accent-green-hover': '#20BD5A',
        'accent-green-dark': '#128C7E',
        'accent-green-deep': '#075E54',
        'border-green-subtle': '#1A5C3A',
        'accent-red': '#25D366',
        'accent-red-hover': '#20BD5A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'micro': '0.18em',
        'wide-plus': '0.08em',
      },
      fontSize: {
        'micro': ['11px', '1.5'],
        '2xs': ['12px', '1.5'],
      },
      lineHeight: {
        'tight-plus': '1.05',
        'heading': '1.1',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
