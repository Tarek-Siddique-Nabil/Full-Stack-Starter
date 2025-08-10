import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // Register custom helpers
  plop.setHelper("split", function (str: string, delimiter: string) {
    return str
      ? str
          .split(delimiter)
          .map((s) => s.trim())
          .filter((s) => s)
      : [];
  });

  plop.setHelper("trim", function (str: string) {
    return str ? str.trim() : "";
  });

  plop.setGenerator("package", {
    description: "Generate a new package for the Monorepo",
    prompts: [
      {
        type: "input",
        name: "name",
        message:
          "What is the name of the package? (You can skip the `@repo/` prefix)",
      },
    ],
    actions: [
      (answers) => {
        if (
          "name" in answers &&
          typeof answers.name === "string" &&
          answers.name.startsWith("@repo/")
        ) {
          answers.name = answers.name.replace("@repo/", "");
        }
        return "Config sanitized";
      },
      {
        type: "add",
        path: "packages/{{ name }}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
    ],
  });
  plop.setGenerator("service", {
    description: "Generate a new service",
    prompts: [
      {
        type: "input",
        name: "name",
        message:
          "What is the name of the service? (You can skip the `@repo/` prefix)",
      },
      {
        type: "input",
        name: "dependencies",
        message:
          "What dependencies does this service need? (comma-separated, e.g., express,cors)",
      },
      {
        type: "input",
        name: "devDependencies",
        message:
          "What dev dependencies does this service need? (comma-separated, e.g., @types/node,typescript)",
      },
    ],
    actions: [
      (answers) => {
        if (
          "name" in answers &&
          typeof answers.name === "string" &&
          answers.name.startsWith("@repo/")
        ) {
          answers.name = answers.name.replace("@repo/", "");
        }

        // Clean up dependencies strings
        if (
          "dependencies" in answers &&
          typeof answers.dependencies === "string"
        ) {
          answers.dependencies = answers.dependencies.trim();
        }

        if (
          "devDependencies" in answers &&
          typeof answers.devDependencies === "string"
        ) {
          answers.devDependencies = answers.devDependencies.trim();
        }

        return "Config sanitized";
      },
      {
        type: "add",
        path: "packages/{{ name }}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
    ],
  });
}
