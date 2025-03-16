// TODO Remove imports you don't use
import { core, nodejs, unbundled } from "@phanect/lint";
import { svelte } from "@phanect/lint-svelte";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    ignores: [
      "path/to/ignore/**",
    ],
  },

  ...core,
  ...unbundled,
  ...svelte,

  {
    // Do not add `files: [ "*" ],` here.

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
