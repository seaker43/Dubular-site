/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  settings: {
    react: { version: "detect" }
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  overrides: [
    {
      files: ["scripts/**/*.{js,mjs,ts}"],
      env: { node: true, es2022: true },
      rules: { "no-undef": "off" }
    },
    {
      files: ["_worker.js", ".open-next/_worker.js"],
      env: { worker: true, serviceworker: true, es2022: true },
      globals: {
        Headers: "readonly",
        Request: "readonly",
        Response: "readonly",
        fetch: "readonly"
      }
    }
  ]
};
