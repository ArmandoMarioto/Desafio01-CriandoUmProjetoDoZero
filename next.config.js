// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});
