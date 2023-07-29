/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-magenta': '#55204a', 
        'custom-black': '#292a29', 
        'custom-green': '#969e42', 
        'custom-darkyellow': '#f5a560', 
        'custom-grey': '#989189', 
        'custom-tint': '#fff7f0', 
        'custom-red': '#ea7564', 
        'custom-purple': '#755cde'
      },
    },
  },
  plugins: [], 
 
}
