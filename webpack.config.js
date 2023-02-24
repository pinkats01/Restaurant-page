const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {  
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};