/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],

  theme: {
    fontSize: {
      xsm: 14,
      sm: 16,
      md: 18,
      lg: 24,
      xlg: 32,
    },

    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',


      gray: {
        900: '#212121',
        800: '#424242',
        700: '#616161',
        600: '#757575',
        400: '#bdbdbd',
        200: '#eeeeee',
        100: '#f5f5f5',
      },

      purple: {
        900: '#311b92',
        500: '#673ab7',
        400: '#7e57c2',
        300: '#9575cd',
        200: '#b39ddb',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
