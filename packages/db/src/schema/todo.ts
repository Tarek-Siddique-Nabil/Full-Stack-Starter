import { sql } from 'drizzle-orm';
import { index, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

const timestampSchema = {
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdateFn(() => new Date()),
};

export const todos = pgTable(
  'todos',
  {
    id: text('id').primaryKey().default(sql`gen_random_uuid()`),
    title: text('title').notNull(),
    description: text('description'),
    status: varchar('status', { enum: ['pending', 'in-progress', 'completed'] })
      .default('pending')
      .notNull(),
    userId: text('user_id').notNull(),
    ...timestampSchema,
  },
  // biome-ignore lint/nursery/noShadow: >
  (todos) => [index('todos_user_id_idx').on(todos.userId)]
);
