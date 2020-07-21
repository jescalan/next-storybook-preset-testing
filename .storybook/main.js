module.exports = {
  stories: ['../components/**/*.stories.@(js|mdx)'],
  addons: [
    '@next/plugin-storybook/preset',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
  ],
}
