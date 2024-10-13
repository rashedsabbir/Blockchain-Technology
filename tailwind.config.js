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
    themes: [
      {
        mytheme: {
          "primary": "#6caac6",
          "secondary": "#cfe7f3",
          "light": "#5897b2",
          "dark": "#f6f6f6",
          "base-100": "#ffffff",
        },
      },
      ],
  },
  
}

