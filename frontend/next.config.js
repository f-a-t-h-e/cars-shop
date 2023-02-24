const withTwin = require("./withTwin.js");

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  // compiler: {
  //   styledComponents: true,
  // },
  // webpack: (config, { isServer }) => {
  //   // Unset client-side javascript that only works server-side
  //   config.resolve.fallback = { fs: false, module: false, path: false };
  //   // if (!isServer) {
  //   //   config.node = { fs: "empty", module: "empty" };
  //   // }
  //   return config;
  // },
});

module.exports = nextConfig;
