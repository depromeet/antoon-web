const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: [
    '../components/**/*.stories.@(ts|tsx)',
    '../domains/**/*.stories.@(ts|tsx)',
    '../pages/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  features: {
    storyStoreV7: true,
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    );
    return config;
  },
};
