var webpack = require('webpack');

module.exports = {
  entry: {
    'react-kinetic': ['./react-kinetic'],
    'smoke-test': './demo/smoke-test.js',
    'rectangles': './demo/rectangles',
    'plane-game': './demo/plane-game.js'
  },
  output: {
    path: 'build',
    filename: '[name].js',
    library: 'ReactKinetic',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony'}
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    },
    kinetic: {
      root: "Kinetic",
      commonjs: "kinetic",
      commonjs2: "kinetic",
      amd: "kinetic"
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("react-kinetic", "react-kinetic.js")
  ]
};
