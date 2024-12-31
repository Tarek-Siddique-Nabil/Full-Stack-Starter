import baseConfig, { restrictEnvAccess } from "@tooling/eslint-config/base";
import nextjsConfig from "@tooling/eslint-config/nextjs";
import reactConfig from "@tooling/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
