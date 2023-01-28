/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'oswald': ['Oswald', 'sans-serif'],
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'primary-color': '#0800FF'/*'#0800FF'*/ /*#ff6347*/,
          'secondary-color': '#3f3cbb',
        },
      },
      
    },
    plugins: [],
  }