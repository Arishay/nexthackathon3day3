// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// module.exports = {
//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         config.cache = false; // Disable Webpack cache
//       }
//       return config;
//     },
//   };
// next.config.mjs
export default {
    webpack: (config, { isServer }) => {
      config.cache = false; // Disable Webpack cache
      return config;
    },
  };
  