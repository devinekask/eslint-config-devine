module.exports = {

  extends: [
    require.resolve(`./index`),
    `plugin:react/recommended`,
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: [
    `react`,
  ],

  rules: {

    "react/jsx-key": `error`,
    "react/display-name": `off`,
    "react/prefer-stateless-function": `error`,
    "react/jsx-wrap-multilines": `error`,
    "react/no-string-refs": `error`,
    "react/jsx-pascal-case": `error`,
    "react/jsx-curly-spacing": `error`,
    "react/jsx-equals-spacing": `error`,
    "react/jsx-handler-names": `error`,
    "react/jsx-space-before-closing": [`error`, `always`]

  },

};
