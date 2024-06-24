/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orelaga: ["Orelega One"],
        jost:["Jost"]
      },
      screens:{
        '3xl': '1750px',
        'xsm': "400px",
        '2xsm': "500px"
      }
    },
  },
  plugins: [],
}

