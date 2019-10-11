module.exports = {
  extends: ['eslint:recommended'],

  parser: 'babel-eslint',

  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true,
    es6: true,
  },

  plugins: ['babel'],

  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'prefer-const': 'error',
    'space-infix-ops': 'error',
    'quote-props': ['error', 'as-needed'],
    'no-console': 'off',
    'prefer-template': 'error',
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-var': 'error',
    eqeqeq: ['error', 'smart'],
    'jsx-quotes': ['error', 'prefer-single'],
    camelcase: 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-in-parens': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-unary-ops': [
      'error',
      { words: true, nonwords: true, overrides: { '!': false, '.': false } },
    ],
    'semi-spacing': ['error', { before: false, after: false }],
    'arrow-spacing': 'error',
    'no-multi-spaces': 'error',
    'array-bracket-spacing': [ 'error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'key-spacing': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],

    'babel/object-curly-spacing': ['error', 'never'],
  },
};
