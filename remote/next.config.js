const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const CONTENT_APP_URL =
  process.env.NEXT_PUBLIC_HOST_APP_URL || "http://localhost:5001";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    host: `host@${CONTENT_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
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
        name: "remote",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
        exposes: {
          "./index": "./pages/index.js",
          
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
