/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable dark mode
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate"],
  },
  
}

