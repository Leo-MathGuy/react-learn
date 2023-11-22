/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "xl": "0 5px 3px #88888888"
      }
    },
    fontFamily: {
      "sans": ['Rubik', 'sans-serif']
    }
  },
  plugins: [],
}

