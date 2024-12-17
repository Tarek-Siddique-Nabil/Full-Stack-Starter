import { relations } from "drizzle-orm";
import { todo } from "@schema/todo.schema";
import { user } from "@schema/user.schema";

export const todoRelations = relations(todo, ({ one }) => ({
  author: one(user, { fields: [todo.authorId], references: [user.id] }),
}));

export const userRelations = relations(user, ({ many }) => ({
  todos: many(todo),
}));
