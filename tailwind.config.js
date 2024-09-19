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
        purewhite:"#ffffff",
        primary:"#323743",
        accent:"#62CD14",
        secondary:"#8DE78A",
        third:"#1DD75B",
        fourth:"#0A4D20",
        fifth:"#323743",
        sixth:"#CCF7AE"
      }
    },
  },
  plugins: [],
}