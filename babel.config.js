module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@assets': './assets',
          '@components': './src/components',
          '@actions': './src/actions',
          '@reducers': './src/reducers',
          '@entities': './src/entities',
        },
      },
    ],
  ],
};
