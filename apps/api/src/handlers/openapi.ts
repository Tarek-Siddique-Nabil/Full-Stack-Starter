import { OpenAPIGenerator } from '@orpc/openapi';
import { ZodToJsonSchemaConverter } from '@orpc/zod';
import { contract } from '@repo/contract/src';
import { Scalar } from '@scalar/hono-api-reference';
import type { Context } from 'hono';

const openAPIGenerator = new OpenAPIGenerator({
  schemaConverters: [new ZodToJsonSchemaConverter()],
});

export async function handleOpenAPISpec(c: Context): Promise<Response> {
  // Generate the OpenAPI spec - the return type is complex but JSON serializable
  const spec = await openAPIGenerator.generate(contract, {
    info: {
      title: 'Full Stack Starter API',
      version: '1.0.0',
      description: 'API for the Full Stack Starter application',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Local development server',
      },
    ],
    security: [{ bearerAuth: [] }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  });

  c.res.headers.set('Content-Type', 'application/json');
  return c.json(spec);
}

export const handleScalarDocs = Scalar({
  url: '/api/spec.json',
  authentication: {
    preferredSecurityScheme: 'bearerAuth',
    securitySchemes: {
      httpBearer: {
        token: 'default-token',
      },
    },
  },
});
