module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '80vh',
      'full': '100%',
     },
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [],
}