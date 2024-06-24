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
      },
      boxShadow: {
        'custom': '0 4px 6px -1px "#EF6E16, 0 2px 4px -1px rgba(239, 110, 22, 0.06)',
      }
    },
  },
  plugins: [],
}

