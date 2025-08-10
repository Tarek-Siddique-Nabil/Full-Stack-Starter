import { user } from '@repo/db/schema';
import { createSchemaFactory } from 'drizzle-zod';
import z from 'zod';

const { createInsertSchema, createSelectSchema } = createSchemaFactory({
  // This configuration will only coerce dates. Set `coerce` to `true` to coerce all data types or specify others
  coerce: {
    date: true,
  },
});

export const NewUserSchema = createInsertSchema(user, {
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export type NewUserSchema = z.infer<typeof NewUserSchema>;

export const UserSchema = createSelectSchema(user);

export type UserSchema = z.infer<typeof UserSchema>;
