const config = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
  },
  features: {
    interactionsDebugger: true, // enable playback controls
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
}
export default config
