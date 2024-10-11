/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Amatic SC', 'monospace'],
        titr: ['Shadows Into Light', 'monospace']
      },
      colors: {
        bg1: '#1A3636',
        bg2: '#40534C',
        bg3: '#677D6A',
        bg4: '#D6BD98'
      }
    },
  },
  plugins: [],
}

