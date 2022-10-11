/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js }"
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": "'Roboto', sans-serif",
      },
      colors: {
        "theGray" : "#6D6E76",
        "lightGrey" :"#313852",
        "darkGrey" : "#1D2130",
        "secondColor" : "#E0E4FC",
        "blackcolor" : " #1D2130"
      },
      backgroundImage : {
        "home-header" : "url('/img/homebrul.svg')",
      }
    
    },
  },
  plugins: [],
}
