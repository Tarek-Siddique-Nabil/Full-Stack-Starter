import {
  timestamp,
  pgTable,
  varchar,
  boolean,
  text,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: varchar("id", { length: 256 }).primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const session = pgTable("session", {
  id: varchar("id", { length: 256 }).primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  ipAddress: text("ip_address").notNull(),
  userAgent: text("user_agent").notNull(),
  userId: varchar("user_id", { length: 256 }).notNull(),
});

export const account = pgTable("account", {
  id: varchar("id", { length: 256 }).primaryKey(),
  accountId: varchar("account_id", { length: 256 }).notNull().unique(),
  providerId: varchar("provider_id", { length: 256 }).notNull(),
  userId: varchar("user_id", { length: 256 }).notNull(),
  accessToken: varchar("access_token", { length: 256 }).notNull(),
  refreshToken: varchar("refresh_token", { length: 256 }).notNull(),
  idToken: varchar("id_token", { length: 256 }).notNull(),
  password: text("password").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});

export const verification = pgTable("verifaication", {
  id: varchar("id", { length: 256 }).primaryKey(),
  userId: varchar("user_id", { length: 256 }).notNull(),
  identifier: varchar("identifier", { length: 256 }).notNull(),
  code: varchar("code", { length: 256 }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});
