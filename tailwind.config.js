/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: '#f9f8eb',
        sage: '#589e85 ',
        palegreen: '#97c5b4'
      }
    },
  },
  plugins: [],
}