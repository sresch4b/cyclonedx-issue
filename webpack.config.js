const path = require('path');
const {CycloneDxWebpackPlugin} = require("@cyclonedx/webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new CycloneDxWebpackPlugin({
        outputLocation: './bom'
      })
  ]
};