/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#F3DADF',
        sideBarColor: '#03122F',
        buttonColor: '#19305C',
        buttonHoverColor: '#AE7DAC',
        customOrangeColor: '#F1916D',
        selectedItemColor:'#413B61',
      }
    },
  },
  plugins: [],
}

