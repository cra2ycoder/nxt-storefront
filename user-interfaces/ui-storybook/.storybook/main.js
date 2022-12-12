module.exports = {
  // https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
  core: {
    builder: 'webpack5',
    options: {
      fsCache: true,
    },
  },
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addoncl-links',
    '@storybook/addon-essentials',
  ],
}
