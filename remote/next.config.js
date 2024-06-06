const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const CONTENT_APP_URL =
  process.env.NEXT_PUBLIC_HOST_APP_URL || "http://localhost:5001";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // host: `host@https://d5plzs9rajy75.cloudfront.net/_next/static/${location}/remoteEntry.js`,
     host: `host@http://localhost:5001/_next/static/${location}/remoteEntry.js`,
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
        name: "remote",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
        exposes: {
          "./Index": "./pages/index.js",
          
          
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
