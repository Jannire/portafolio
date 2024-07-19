/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "froth": "#E7F0DC",
        "matcha": {
          "light": "#729762",
          "medium": "#658147",
          "dark": "#597445"
        },
        "chocolate": "#4B3621",
        "fondo": "#252A34",
        "pinky": "#FF2E63",
        "bluey": "#08D9D6"

      },
      animation: {
        tilt: "tilt 10s infinite linear"
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
      }
    }
  },
},
plugins: [],
}