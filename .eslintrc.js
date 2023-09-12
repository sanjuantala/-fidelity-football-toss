module.exports = {
  extends: ['react-app', 'airbnb-base', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'off',
    'prefer-rest-params': 'off',
    'func-names': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'import/first': 'off',
    'no-else-return': 'off',
    quotes: [2, 'single', 'avoid-escape'],
  },
  env: {
    browser: true,
    es6: true,
  },
};
