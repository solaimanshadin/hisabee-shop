/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: {
          50: '#fef7e3',
          100: '#fdf0c0',
          200: '#fde899',
          300: '#fce171',
          400: '#fbd84a',
          500: '#f9be29',
          600: '#f8a404',
          700: '#f58c00',
          800: '#f37300',
          900: '#f15000',
        },
      }
    },
  },
  plugins: [],
}
