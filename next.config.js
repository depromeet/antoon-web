/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const nextConfig = {
  images: {
    domains: [
      'k.kakaocdn.net',
      'blog.kakaocdn.net',
      'colorate.azurewebsites.net',
      'images.unsplash.com',
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new ESLintWebpackPlugin({
        failOnWarning: false,
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
