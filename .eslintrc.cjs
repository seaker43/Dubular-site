module.exports = {
  env: { browser: true, node: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: { "prettier/prettier": "error" },
};
