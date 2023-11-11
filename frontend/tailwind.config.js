/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'],
  theme: {
    extend: {
      maxWidth: {
        'screen-12xl': '1320px',
      },
      colors: {
        'custom-primary': '#DAFFFB',
        'custom-secondary': '#64CCC5',
        'custom-tertiary': '#176B87'
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
};