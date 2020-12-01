module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "prettier/prettier": ["error", { printWidth: 100, trailingComma: 'all' }],
    "react-hooks/exhaustive-deps": "off"
  }
};
