const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, './tsconfig.json')
        }
      }
    }
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        }
      ]
    })
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}