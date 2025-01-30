import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import boundaries from "eslint-plugin-boundaries";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      boundaries,
    },
    rules: {
      ...boundaries.configs.recommended.rules,
      "boundaries/no-unknown": ["error"],
      "boundaries/no-unknown-files": ["error"],
      "boundaries/element-types": [
        "error",
        {
          "default": "disallow",
          "rules": [
            {
              "from": ["shared"],
              "allow": ["shared"]
            },
            {
              "from": ["feature"],
              "allow": [
                "shared",
                ["feature", { "featureName": "${from.featureName}" }]
              ]
            },
            {
              "from": ["app"],
              "allow": ["shared", "feature"]
            },
            {
              "from": ["app"],
              "allow": [["app", { "fileName": "*.css" }]]
            }
          ]
        }
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ]
    },
    settings: {
      "boundaries/include": ["src/**/*"],
      "boundaries/elements": [
        {
          "mode": "full",
          "type": "shared",
          "pattern": [
            "src/assets/**/*",
            "src/components/*/**/*.{ts,tsx}",
            "src/services/*/**/*.{ts,tsx}",
            "src/types/**/*.{ts,tsx}"
          ]
        },
        {
          "mode": "full",
          "type": "feature",
          "capture": ["featureName"],
          "pattern": ["src/features/*/**/*.{ts,tsx}"]
        },
        {
          "mode": "full",
          "type": "app",
          "capture": ["_", "fileName"],
          "pattern": ["src/pages/**/*"]
        },
      ]
    },
  },
];

export default eslintConfig;
