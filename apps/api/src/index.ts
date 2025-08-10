/** biome-ignore-all lint/suspicious/noConsole: > */
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { handleAuthContext, handleBetterAuth } from './handlers/auth';
import { handleOpenAPISpec, handleScalarDocs } from './handlers/openapi';
import { handleOpenAPIRequests, handleRPCRequests } from './handlers/orpc';
import type { Bindings } from './lib/types';

const app = new Hono<{ Variables: Bindings }>();

app.use(logger());
app.on(['POST', 'GET'], '/api/auth/*', handleBetterAuth);
app.use('*', handleAuthContext);
app.get('/api/spec.json', handleOpenAPISpec);
app.get('/api/docs', handleScalarDocs);
app.use('/api/*', handleOpenAPIRequests);
app.use('/rpc/*', handleRPCRequests);

serve(
  {
    fetch: app.fetch,
    port: 3001,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
