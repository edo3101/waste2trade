/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'screen-12xl': '1920px',
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
};