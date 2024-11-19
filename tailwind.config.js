/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
        dancing: ['Dancing Script', 'cursive'], // Add Dancing Script font
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
