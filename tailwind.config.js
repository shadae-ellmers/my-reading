/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        ivory: '#ffefcd',
        natural: '#a58e74',
        apricot: '#e09132',
        fern: '#424530',
      },
      fontFamily: {
        primary: 'Main',
      },
    },
  },
  plugins: [],
}
