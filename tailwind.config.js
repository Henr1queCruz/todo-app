/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'desktop-dark': "url('/src/assets/desktop/bg-desktop-dark.jpg')",
        'desktop-light': "url('/src/assets/desktop/bg-desktop-light.jpg')",
        'mobile-dark': "url('/src/assets/mobile/bg-mobile-dark.jpg')",
        'mobile-light': "url('/src/assets/mobile/bg-mobile-light.jpg')",
        checkBackground:
          'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
      colors: {
        brightBlue: 'hsl(220, 98%, 61%)',

        lightTheme: {
          veryLightGray: 'hsl(0, 0%, 98%)',
          veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
          lightGrayishBlue: 'hsl(233, 11%, 84%)',
          darkGrayishBlue: 'hsl(236, 9%, 61%)',
          veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        },

        darkTheme: {
          veryDarkBlue: 'hsl(235, 21%, 11%)',
          veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
          lightGrayishBlue: 'hsl(234, 39%, 85%)',
          hoverLightGrayishBlue: 'hsl(236, 33%, 92%)',
          darkGrayishBlue: 'hsl(234, 11%, 52%)',
          veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
          veryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
        },
      },
      boxShadow: {
        lightShadow: '0 35px 50px -15px rgba(194, 195, 214, 0.5)',
        darkShadow: '0px 35px 50px -15px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        18: '1.125rem',
      },
      screens: {
        sm: { max: '540px' },
        xl: { min: '541px' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
