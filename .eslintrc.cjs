/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  overrides: [
    {
      files: ["scripts/**/*.{js,mjs}", "local-worker.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser"
    }
  ]
};
globals: { React: "writable" }
