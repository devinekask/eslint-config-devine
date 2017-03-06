module.exports = {

  extends: [
    require.resolve(`./index`),
    `plugin:react/recommended`,
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    `react`,
  ],

  rules: {

    "react/jsx-key": `error`,
    "react/display-name": `off`,
    "react/prefer-stateless-function": `error`,
    "react/no-multi-comp": `error`,
    "react/no-array-index-key": `error`,
    "react/no-unescaped-entities": `error`,
    "react/no-unused-prop-types": `error`,
    "react/no-unknown-property": `error`,
    "react/require-default-props": `error`,
    "react/jsx-wrap-multilines": `error`,
    "react/no-string-refs": `error`,
    "react/jsx-pascal-case": `error`,
    "react/jsx-filename-extension": `error`,
    "react/jsx-curly-spacing": `error`,
    "react/jsx-no-bind": [`error`, {
      ignoreRefs: true,
    }],
    "react/jsx-equals-spacing": `error`,
    "react/jsx-handler-names": `error`,
    "react/jsx-space-before-closing": [`error`, `always`],

  },

};
