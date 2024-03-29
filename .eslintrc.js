module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],

  rules: {
    quotes: [2, "double"],
    indent: [2, 2],
    "comma-dangle": [0],
    "react/jsx-indent": [2, 2],
    "import/extensions": "off",
    "import/no-unresolved": [0],
    "import/prefer-default-export": [0],
    "no-multiple-empty-lines": [2, { max: 2 }],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "no-shadow": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "off",
    "no-undef": "off",
    "implicit-arrow-linebreak": "off",
    "@typescript-eslint/ban-ts-comment": [0],
    "no-underscore-dangle": "off",
    "operator-linebreak": "off",
    "import/no-extraneous-dependencies": "off",
    "i18next/no-literal-string": [
      1,
      {
        markupOnly: true,
        ignoreAttribute: ["data-testid", "to", "variant", "size"],
      },
    ],
    "function-paren-newline": "off",
    "no-restricted-globals": "off",
    "object-curly-newline": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: [],
        labelAttributes: ["label"],
        controlComponents: ["input"],
        depth: 1,
      },
    ],
  },
  "max-len": [
    2,
    120,
    {
      ignoreComments: true,
    },
  ],
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "error",

  globals: {
    __IS_DEV__: true,
    __API__: "",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
    },
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
    {
      files: ["**/scripts/*"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "wrap-iife": "off",
      },
    },
    {
      files: ["**/src/**/*Slice.ts"],
      rules: {
        "no-param-reassign": "off",
      },
    },
  ],
};
