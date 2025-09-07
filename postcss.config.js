/** Only run Tailwind on globals.css to avoid native Oxide in CF builds */
module.exports = (ctx) => ({
  plugins: {
    '@tailwindcss/postcss': ctx?.file?.basename === 'globals.css' ? {} : false,
    autoprefixer: {},
  },
});
