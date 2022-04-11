/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['k.kakaocdn.net', 'blog.kakaocdn.net'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
