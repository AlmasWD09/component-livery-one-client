/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', //blue
        primaryGray: '#60a5fa', 
        secondary: '#ecc94b',
        // ...
      },
    },
  },
  plugins: [],
}

