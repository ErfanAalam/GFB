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
        '2xsm': "500px",
        '3xsm' : "550px",
        '4xsm' : "600px"
      },
      boxShadow: {
        'custom': ' 0px 4px 4px 0px rgba(231, 231, 231, 0.64) inset',
        'service-shadow': ' 0px 2px 1000px 10px rgba(0, 0, 0, 0.84) , 0px 20px 1000px 10px rgba(0, 0, 0, 0.84)  ',
      }
    },
  },
  plugins: [],
}

