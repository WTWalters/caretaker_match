import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Marketing copy is ported verbatim from the design source; escaping every
    // apostrophe and quote would make the prose unreviewable against the
    // original.
    files: ["src/app/(site)/**/*.tsx", "src/components/site/**/*.tsx"],
    rules: {
      "react/no-unescaped-entities": "off",
      // Logo and founder headshots are small, fixed-size, and already
      // optimised; next/image adds no benefit and changes the layout.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
