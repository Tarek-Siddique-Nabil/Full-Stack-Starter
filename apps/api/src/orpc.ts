import { implement, ORPCError } from '@orpc/server';
import { contract } from '@repo/contract';
import type { authlib } from './lib/auth';
import { dbProviderMiddleware } from './middleware/db';

export interface ORPCContext {
  user?: typeof authlib.$Infer.Session.user;
  session?: typeof authlib.$Infer.Session.session;
}

export const pub = implement(contract)
  .$context<ORPCContext>()
  .use(dbProviderMiddleware);

export const authed = pub.use(({ context, next }) => {
  if (!context.user) {
    throw new ORPCError('UNAUTHORIZED');
  }

  return next({
    context: {
      user: context.user,
    },
  });
});
