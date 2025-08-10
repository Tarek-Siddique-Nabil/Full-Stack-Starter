import { db } from '@repo/db/src';
import { account, session, user, verification } from '@repo/db/src/schema';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { openAPI } from 'better-auth/plugins';
export const authlib = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  plugins: [openAPI()],
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
});
