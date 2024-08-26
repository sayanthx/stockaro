/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        stock:"url(/stocks.jpg)"
      },
      dropShadow:{
        "4xl":"0 20px 25px rgba(0, 0, 0, 0.35)"
      },
    },
  },
  plugins: [],
}

