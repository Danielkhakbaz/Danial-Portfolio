import globals from "globals";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    ignores: [".husky/**/*", ".next/**/*", "node_modules/**/*", ".vscode/**/*"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...reactRecommended,
    settings: {
      version: "detect",
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
    },
    rules: {
      "react/jsx-no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "react/react-in-jsx-scope": 0,
      "spaced-comment": ["error", "always", { markers: ["/"] }],
      "new-cap": 0,
    },
  },
];
