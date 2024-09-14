/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:"#f5f4f5",
        primary:"#323743",
        accent:"#62CD14"
      }
    },
  },
  plugins: [],
}