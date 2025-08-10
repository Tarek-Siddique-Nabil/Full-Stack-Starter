# Database Package

Drizzle ORM-based database layer with PostgreSQL schema definitions and migrations.

## 🚀 Features

- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** schema definitions
- **Migration** management
- **Schema validation** with Zod integration
- **Development tools** (Drizzle Studio)

## 🏗️ Schema Structure

```
src/
├── schema/
│   ├── auth.ts      # User, session, account tables
│   ├── todo.ts      # Todo application tables  
│   └── index.ts     # Schema exports
├── db.ts           # Database connection
└── index.ts        # Package exports
```

## 📋 Tables

### Authentication
- **user** - User accounts and profiles
- **session** - User sessions and tokens
- **account** - OAuth provider accounts
- **verification** - Email verification tokens

### Application
- **todos** - Todo items with status tracking

## 🔧 Development Commands

### Generate Migrations
```bash
pnpm generate
```
Creates migration files from schema changes

### Run Migrations
```bash
pnpm migrate
```
Applies pending migrations to database

### Database Studio
```bash
pnpm studio
```
Opens Drizzle Studio at http://localhost:3005

### Push Schema (Development)
```bash
pnpm push
```
Pushes schema directly to DB (skips migrations)

## 🗄️ Database Connection

The package exports a configured Drizzle instance:

```typescript
import { db } from '@repo/db'

// Type-safe queries
const users = await db.select().from(user)
const newUser = await db.insert(user).values({...})
```

## 📦 Schema Exports

```typescript
import { user, session, todos } from '@repo/db/schema'

// Use in your application
const userSchema = user
const todoSchema = todos
```

## 🔧 Configuration

Requires environment variables (see `.env.example`):
- `DATABASE_URL` - PostgreSQL connection string

### Database URL Format
```
postgresql://username:password@host:port/database
```

## 🚀 Production Setup

1. **Create database**
   ```sql
   CREATE DATABASE your_app_name;
   ```

2. **Set environment**
   ```bash
   DATABASE_URL="postgresql://user:pass@host:5432/dbname"
   ```

3. **Run migrations**
   ```bash
   pnpm migrate
   ```

## 🛠️ Schema Development

### Adding New Tables
1. Create schema in `src/schema/`
2. Export from `src/schema/index.ts`
3. Generate migration: `pnpm generate`
4. Apply migration: `pnpm migrate`

### Schema Relationships
```typescript
export const todos = pgTable('todos', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' })
})
```

## 📚 Dependencies

### Core
- `drizzle-orm` - ORM and query builder
- `drizzle-kit` - CLI and migration tools
- `pg` - PostgreSQL driver

### Development
- `@types/pg` - TypeScript types
- `dotenv-cli` - Environment loading

## 🔍 Debugging

### Check Connection
```bash
pnpm with-env node -e "console.log(process.env.DATABASE_URL)"
```

### Validate Schema
```bash
pnpm drizzle-kit check
```
