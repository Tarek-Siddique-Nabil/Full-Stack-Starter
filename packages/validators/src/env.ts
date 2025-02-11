/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from "node:path";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(currentDir, '../../..');
expand(
  config({
    path: path.resolve(
     rootDir,
      process.env.NODE_ENV === "development" ? ".env.development" : ".env",
    ),
  }),
);

const EnvSchema = z
  .object({
    NODE_ENV: z.string().default("development"),
    PORT: z.coerce.number().default(9999),
    LOG_LEVEL: z.enum([
      "fatal",
      "error",
      "warn",
      "info",
      "debug",
      "trace",
      "silent",
    ]),
    DATABASE_URL: z.string().url(),
    DATABASE_AUTH_TOKEN: z.string().optional(),
  })
  .superRefine((input, ctx) => {
    if (input.NODE_ENV === "production" && !input.DATABASE_AUTH_TOKEN) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_type,
        expected: "string",
        received: "undefined",
        path: ["DATABASE_AUTH_TOKEN"],
        message: "Must be set when NODE_ENV is 'production'",
      });
    }
  });

export type env = z.infer<typeof EnvSchema>;

const { data: env, error } = EnvSchema.safeParse(process.env);

if (error) {
  console.error("❌ Invalid env:");
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default env!;
