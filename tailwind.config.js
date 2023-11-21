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
        myblack: '#1E1C1B',
        mygreen: '#759679',
        myred: '#783F36',
        mypink: '#D59C91',
        mywhite: '#F6F4F1',
      },
      fontFamily: {
        primary: 'Main',
      },
    },
  },
  plugins: [],
}
