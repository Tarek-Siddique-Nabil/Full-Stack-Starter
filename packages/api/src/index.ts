import { serve } from "@hono/node-server";
import env from "@repo/validators/env";
import app from "./app";
// import env from "@repo/validators/env";

const port = 6578;
// eslint-disable-next-line no-console
console.log(`Server is running on port http://localhost:${port}`);
console.log(env)
serve({
  fetch: app.fetch,
  port,
});
