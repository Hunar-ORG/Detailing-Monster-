/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#09090b',
        'surface': '#0f0f12',
        'surface-2': '#131317',
        'border-subtle': 'rgba(255,255,255,0.07)',
        'border-mid': 'rgba(255,255,255,0.1)',
        'accent-red': '#e31b23',
        'accent-red-hover': '#c8171e',
        'text-primary': '#f4f4f6',
        'text-secondary': '#8a8a94',
        'text-muted': '#5a5a64',
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
