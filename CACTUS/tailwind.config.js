/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['"vazir"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

