module.exports = {
    stories: [
        '../components/**/*.stories.@(ts|tsx)',
        '../pages/**/*.stories.@(ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    features: {
        storyStoreV7: true,
    },
    framework: '@storybook/react',
};
