/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'signbtn-light-brown': '#FDEADC',
        'signbtn-light-green': '#E7FDDC',
        'signbtn-dark-brown': '#B79175',
        'signbtn-dark-green': '#61884F',
        'own-light-brown': '#F8EFE9',
        'own-dark-brown': '#604837',
      }
    },
  },
  plugins: [],
}