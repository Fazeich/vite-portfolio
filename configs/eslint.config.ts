import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
  ignores: ["node_modules/*", "dist/*", "public/*", "configs/*"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-object-type": "off",
  },
  extends: [tseslint.configs.recommended],
});
