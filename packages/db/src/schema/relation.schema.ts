import { todo } from "@schema/todo.schema";
import { session, user } from "@schema/user.schema";
import { relations } from "drizzle-orm";

import { account, verification } from "./user.schema";

export const todoRelations = relations(todo, ({ one }) => ({
  author: one(user, { fields: [todo.authorId], references: [user.id] }),
}));

export const userRelations = relations(user, ({ many }) => ({
  todos: many(todo),
  sessions: many(session),
  verifications: many(verification),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  session: one(user, { fields: [session.userId], references: [user.id] }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  account: one(user, { fields: [account.userId], references: [user.id] }),
}));

export const verificationRelations = relations(verification, ({ one }) => ({
  verification: one(user, {
    fields: [verification.userId],
    references: [user.id],
  }),
}));
