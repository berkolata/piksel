/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#cc4433",
        "second-color": "#f50963",
      },
      cursor: {
        custom: 'url("/assets/images/cursor-default.png"), auto',
        hover: 'url("/assets/images/cursor-hover.png"), auto',
        special: 'url("/assets/images/special-hover.png"), auto',
      },
    },
  },
  plugins: [],
};
