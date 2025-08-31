const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  // Output configuration
  output: {
    // Output filename for the bundle
    filename: 'bundle.js',
    // Output path for the bundled files
    path: path.resolve(__dirname, 'dist')
  },
  // Module configuration for loaders
  module: {
    rules: [
      {
        // Test for JavaScript and JSX files
        test: /\.jsx?$/, 
        // Exclude node_modules from processing
        exclude: /node_modules/, 
        use: {
          // Use Babel loader for transpiling
          loader: 'babel-loader'
        }
      }
    ]
  },
  // Resolve file extensions
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Enable source maps for easier debugging
  devtool: 'source-map' // Provides source maps for easier debugging
};