/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0496FF',
        secondary: '#FFBC42',
        third: '#353535',
        fourth: '#757575',
      },
      screens: {
        
      }
    },
  },
  plugins: [],
}
