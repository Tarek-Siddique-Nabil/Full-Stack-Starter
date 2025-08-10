import { createEnv } from '@t3-oss/env-nextjs';

import { z } from 'zod';

export const keys = () =>
  createEnv({
    client: {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().startsWith('pk_test_'),
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
      NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z.string(),
      NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: z.string(),
    },
    server: {
      CLERK_SECRET_KEY: z.string().startsWith('sk_test_'),
    },
    runtimeEnv: {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
      NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL:
        process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL,
      NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL:
        process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL,
    },
  });
