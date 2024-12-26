/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "register-back": "url('./picture/registerbackground.jpg')",
        "login-back": "url('./picture/loginbackground.jpg')",
        'home-gradient': 'linear-gradient(180deg, rgba(30, 30, 30, 0), rgb(30, 30, 30))'
      },
      colors: {
        "backColor": "rgb(20, 20, 20, 0.7)",
        "home-color": "rgb(30, 30, 30)"
      },
      transitionProperty: {
        'nav': 'height, top',
      }
    },
  },
  plugins: [],
}

