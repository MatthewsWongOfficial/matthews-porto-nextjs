import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend configurations for Next.js with core web vitals and TypeScript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Turn off the "no unescaped entities" rule
      "@typescript-eslint/no-unused-vars": [
        "error", 
        { 
          argsIgnorePattern: "^_" // Allow unused function arguments with names starting with "_"
        }
      ],
      "react/jsx-no-undef": "error", // Ensure all JSX components are defined
      "react/react-in-jsx-scope": "off", // Next.js automatically handles React in scope
    },
  },
];

export default eslintConfig;
