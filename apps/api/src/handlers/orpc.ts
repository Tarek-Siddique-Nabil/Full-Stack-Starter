/** biome-ignore-all lint/suspicious/noConsole: > */
import { OpenAPIHandler } from '@orpc/openapi/fetch';
import { onError } from '@orpc/server';
import { RPCHandler } from '@orpc/server/fetch';
import { ZodSmartCoercionPlugin } from '@orpc/zod';
import type { Context, Next } from 'hono';
import { router } from '../router';

const openAPIHandler = new OpenAPIHandler(router, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
  plugins: [new ZodSmartCoercionPlugin()],
});

const rpcHandler = new RPCHandler(router, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export async function handleOpenAPIRequests(c: Context, next: Next) {
  const { matched, response } = await openAPIHandler.handle(c.req.raw, {
    prefix: '/api',
    context: {
      user: c.get('user'),
      session: c.get('session'),
    },
  });

  if (matched) {
    return c.newResponse(response.body, response);
  }

  await next();
}

export async function handleRPCRequests(c: Context, next: Next) {
  const { matched, response } = await rpcHandler.handle(c.req.raw, {
    prefix: '/rpc',
    context: {
      user: c.get('user'),
      session: c.get('session'),
    },
  });

  if (matched) {
    return c.newResponse(response.body, response);
  }

  await next();
}
