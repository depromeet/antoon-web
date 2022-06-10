module.exports = {
  siteUrl: 'https://antoon.fun',
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/user/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/user/*'],
      },
    ],
  },
};
