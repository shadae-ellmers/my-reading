/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      colors: {
        myblack: '#1E1C1B',
        mygreen: '#436B5C',
        myred: '#C65038',
        mypink: '#E6B5A6',
        mywhite: '#F6F4F1',
      },
      fontFamily: {
        primary: 'Main',
      },
      fontSize: {
        small: '15px',
        medium: '20px',
        large: '25px',
        extralg: '30px',
      },
    },
  },
  plugins: [],
}
