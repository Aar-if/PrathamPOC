const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const CONTENT_APP_URL =
  process.env.NEXT_PUBLIC_REMOTE_APP_URL || "http://localhost:5002";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    remote: `remote@${CONTENT_APP_URL}/_next/static/${location}/remoteEntry.js`,
    reactapp: `reactapp@http://localhost:3000/remoteEntry.js`,
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
