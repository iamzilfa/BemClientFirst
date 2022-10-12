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
        "secondColor" :"#E0E4FC",
        "blackcolor" :"#1D2130",
        "blackRock": "#2B2E3C"
      },
      backgroundImage : {
        "home-header" : "url('/img/homebrul.svg')",
        "contact-background-image" : "url('/img/Blur\ Gradient\ \(7\).png')",
        "pricing-background-image": "url('/img/Blur\ Gradient.svg')",
        "conversions-background-image": "url('/img/Blur\ Gradient\ \(3\).svg')"
      }
    
    },
  },
  plugins: [],
}
