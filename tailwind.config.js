/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#Faa9ba', 
        'custom-black': '#020202', 
        'custom-green': '#969e42', 
        'custom-darkyellow': '#deb657', 
        'custom-blue': '#c0e4ff', 
        'custom-purple': '#d4c0ff'
      },
    },
  },
  plugins: [], 
 
}