/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],

  theme: {
    fontSize: {
      xxs: 10,
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
        500: '#959595',
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
      },

      green: {
        900: '#679100',
        800: '#78a900',
        700: '#8ac100',
        600: '#9bd900',
        500: '#acf100',
        400: '#bdf433',
        300: '#cdf766',
        200: '#def999',
        100: '#eefccc',
      },

      sucess: '#34D399',
      alert: '#F87171',
      red: {
        100: '#fad4d4',
        200: '#f6a9a9',
        300: '#ef6969',
        400: '#ea3e3e',
        500: '#e82828',
        600: '#d12424',
        700: '#ba2020',
        800: '#a21c1c',
        900: '#5d1010',
      },

      rose: {
        '50': '#fff1f2',
        '100': '#ffe4e6',
        '200': '#fecdd3',
        '300': '#fda4af',
        '400': '#fb7185',
        '500': '#f43f5e',
        '600': '#e11d48',
        '700': '#be123c',
        '800': '#9f1239',
        '900': '#881337'
      }

    },
    extend: {

      screens: {
        'phone': '300px'
      },

      rotate: {
        '360': '360deg',
      },

      gridTemplateColumns: {
        'layout': 'repeat(3, minmax(320px,1fr))'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite'
      },

      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],

  variants: {
    scrollbar: ['rounded']
  }
};
