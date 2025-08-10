import { os } from '@orpc/server';
import { db } from '@repo/db/src';

/**
 * Best practices for dedupe-middlewares
 * {@link https://orpc.unnoq.com/docs/best-practices/dedupe-middleware}
 */
export const dbProviderMiddleware = os
  .$context<{ DB?: typeof db }>()
  .middleware(({ context, next }) => {
    /**
     * Why we should ?? here?
     * Because it can avoid reusing the same DB instance when unnecessary.
     * {@link https://orpc.unnoq.com/docs/best-practices/dedupe-middleware}
     */
    const DB = context.DB ?? db;

    return next({
      context: {
        DB,
      },
    });
  });
