/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-f': '#012E40',
        'azul-m': '#025159',
        'azul': '#038C8C',
        'azul-b': '#03A696',
        'naranja': '#F28705'
      },
    },
  },
  plugins: [],
}

