/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        monolith: '0 15px 80px -20px #D8D24D',
      },
      colors: {
        black: '#0E1111',
        white: '#FBFBFB',
        grey: '#8CA3AD',
        background: '#252B35',
        codeblock: '#2E3541',
        darkgreen: '#235353',
        green: '#93c763',
        accent: '#FFF96B',
        accenthover: '#EDE759',
        accentshadow: '#D8D24D',
        brightgreen: '#78FF93',
        purple: '#8745EA',
        darkpurple: '#5D4384',
        lightgrey: '#EBEEF1',
        brightred: '#d5102e',
      },
      fontFamily: {
        sans: [
          'Lato',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
        josefin: [
          'Josefin Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
    },
  },
  plugins: [],
};
