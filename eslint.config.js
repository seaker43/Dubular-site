import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        setTimeout: true,
        clearTimeout: true,
        requestAnimationFrame: true,
        setInterval: true,
        clearInterval: true,
        process: true,
        window: true,
        Response: true,
        browser: true,
        node: true,
        console: true,
        Intl: true,
        location: true,
        module: true,
        require: true,
      },
    },
    // IMPORTANT: object, not array
    plugins: { react: reactPlugin },

    // Pull in just the rules (not the entire preset object that may contain a bad `plugins` array)
    rules: {
      ...(reactPlugin.configs?.recommended?.rules ?? {}),
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    settings: { react: { version: "detect" } },
  },
];
