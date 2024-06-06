const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const path = require('path');


const CONTENT_APP_URL =
  process.env.NEXT_PUBLIC_REMOTE_APP_URL || "http://localhost:5002";

  const REACT_APP_URL =
  process.env.NEXT_PUBLIC_REACT_APP_URL || "http://localhost:3000";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // remote: `remote@https://d5plzs9rajy75.cloudfront.net/remote/_next/static/${location}/remoteEntry.js`,
    // reactapp: `reactapp@https://d5plzs9rajy75.cloudfront.net/react/remoteEntry.js`,
   remote: `remote@http://localhost:5002/_next/static/${location}/remoteEntry.js`,
   reactapp: `reactapp@http://localhost:3000/remoteEntry.js`,
  };

};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
        exposes: {
          "./SearchBox": "./components/SearchBox.js",
        },
        shared: {
          "@emotion/": {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
          "@chakra-ui/": {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
