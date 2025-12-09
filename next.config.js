/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Fix for Node 20+ OpenSSL changes with older Webpack/Next versions
    config.output.hashFunction = "xxhash64";
    return config;
  },
};

module.exports = nextConfig;
