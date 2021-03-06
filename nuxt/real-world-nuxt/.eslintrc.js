module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-unused-vars": "warn",
    eqeqeq: "warn",
    "no-irregular-whitespace": "warn",
    "prettier/prettier": "warn",
    "vue/attribute-hyphenation": ["warn", "never", { ignore: ["custom-prop"] }],
    "vue/component-definition-name-casing": "warn",
    "vue/prop-name-casing": "warn",
    "vue/v-bind-style": "warn",
    "vue/v-on-style": "warn",
    "vue/attributes-order": "warn",
    "vue/component-tags-order": [
      "warn",
      {
        order: ["template", "script", "style"],
      },
    ],
    "vue/order-in-components": "warn",
    "vue/eqeqeq": "warn",
    "vue/match-component-file-name": "warn",
    "vue/no-irregular-whitespace": "warn",
    "vue/no-restricted-syntax": "warn",
    "vue/require-direct-export": "warn",
    "vue/v-on-function-call": "warn",
    "vue/require-prop-types": "warn",
    "vue/component-name-in-template-casing": "warn",
    "vue/no-v-html": "error",
    "vue/no-reserved-component-names": "error",
    "vue/this-in-template": "error",
    "vue/no-template-shadow": "error",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
