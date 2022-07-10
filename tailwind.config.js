/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      
    },
    extend: {
      backgroundImage: {
        'js_bg': "url('/assets/bg.jpg')"
      }
    },
  },
  plugins: [],
}
