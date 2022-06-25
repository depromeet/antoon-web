/** @type {import('next').NextConfig} */

/* eslint-disable @typescript-eslint/no-var-requires */
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  images: {
    domains: [
      'k.kakaocdn.net',
      'blog.kakaocdn.net',
      'dn-img-page.kakao.com',
      'shared-comic.pstatic.net',
      'colorate.azurewebsites.net',
      'images.unsplash.com',
      'antoon-api-bucket.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new ESLintWebpackPlugin({
        failOnWarning: false,
      }),
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
