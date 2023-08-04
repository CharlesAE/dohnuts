/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
      'donutpink' : "#FFAEBC",
      'donutblue' : "#A0E7E5",
      'donutdarkblue': "#283a39",
      'donutgreen': "#B4F8C8",
      'donutyellow': "#FBE7C6",
      'champagne' : "#8A9EA1",
      'darkchampagne':"#454f51"
      
      },
      flex: {
        'main': '1 0 auto'
      },
      padding: {
        'spacing': '0 0 0'
      }
    },
  },
  plugins: [],
}

