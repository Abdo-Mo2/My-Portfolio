const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-url')({
      url: 'copy',
      assetsPath: path.resolve(__dirname, 'css', 'assets'),
    }),
  ],
};
