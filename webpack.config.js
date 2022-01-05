const path = require('path');

module.exports = {
  mode: 'development',
  entry: './uncooked/ingredients.js',
  output: {
    filename: 'soup.js',
    path: path.resolve(__dirname, 'steamy'),
  },
}