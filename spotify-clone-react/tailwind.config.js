/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        
      }, 
      colors: {
        'zinc-925': '#121212',
      }
    },
  },
  plugins: [],
}

