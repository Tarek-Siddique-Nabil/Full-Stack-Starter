import type { Context } from 'hono';
import { authlib } from '../lib/auth';

export async function handleBetterAuth(c: Context) {
  return await authlib.handler(c.req.raw);
}

export async function handleAuthContext(c: Context, next: () => Promise<void>) {
  const session = await authlib.api.getSession(c.req.raw);

  if (session) {
    c.set('user', session.user);
    c.set('session', session.session);
  } else {
    c.set('user', null);
    c.set('session', null);
  }

  return next();
}
