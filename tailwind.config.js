/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'oswald': ['Oswald', 'Poppins','sans-serif'],
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'primary-color': '#0800FF'/*'#0800FF'*/ /*#ff6347*/,
          'secondary-color': '#3f3cbb',
        },
        gridTemplateColumns: {
          // Complex site-specific column configuration
          'main': '2fr 1fr',
          'card': '1fr 2fr',
        },
        gridTemplateRows: {
          // Simple 8 row grid
          'card-y': '1f 2fr',
  
          // Complex site-specific row configuration
          'layout': '200px minmax(900px, 1fr) 100px',
        }
      },
      
    },
    plugins: [],
  }