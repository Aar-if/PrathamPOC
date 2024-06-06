const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = () => ({

  devServer: {
    port: 3000,
  },
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "reactapp",
          filename: "remoteEntry.js",
          exposes: {
            "./Sample": "./src/components/Sample",
            "./Observation": "./src/components/Observation",
            "./Player": "./src/pages/Player"
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});