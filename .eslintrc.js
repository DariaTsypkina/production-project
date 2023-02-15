module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
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
  ],
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
    "@typescript-eslint/ban-ts-comment": "off",
    "no-underscore-dangle": "off",
    "operator-linebreak": "off",
    "import/no-extraneous-dependencies": "off",
  },
  globals: {
    __IS_DEV__: true,
  },
};

