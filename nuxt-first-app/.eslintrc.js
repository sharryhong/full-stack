module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["vue"],
  ignorePatterns: ["**/test/*.js"],
  rules: {
    "no-console": "off",
    "semi": ["error", "always"],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
