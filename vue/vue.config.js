const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:4001/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'vue',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'vue' },
        exposes: {
          './CustomButton': './src/components/Button',
        }
      }),
    ],
  },
  devServer: {
    port: 4001,
  },
};