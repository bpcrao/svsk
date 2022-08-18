/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  content: ['**.{html,js}'],
  theme: {
    extend: { spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
    },
    fontFamily: {
      'rubik': ['"Rubik"', 'sans-serif']
    }}
  },
  plugins: [],
}
