module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: './src/renderer.tsx',
  plugins: [],
  output: {
    path: __dirname + '/build',
    filename: 'renderer.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}