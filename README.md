# Full Stack Starter

A modern full-stack application built with ORPC, Next.js, and TypeScript following contract-first development principles.

## 🏗️ Architecture

This is a monorepo containing:

### Apps
- **`apps/api`** - ORPC-based API server with Hono
- **`apps/web`** - Next.js frontend application

### Packages
- **`packages/contract`** - Shared ORPC contracts and schemas
- **`packages/db`** - Database schema and connections (Drizzle ORM)
- **`packages/ui`** - Shared UI components (shadcn/ui)
- **`packages/typescript-config`** - Shared TypeScript configurations

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm 10.4.1+
- PostgreSQL database

### Setup
1. **Clone and install**
   ```bash
   git clone <repo-url>
   cd Full-Stack-Starter
   pnpm install
   ```

2. **Environment setup**
   ```bash
   # Copy environment files
   cp apps/api/.env.example apps/api/.env.local
   cp apps/web/.env.example apps/web/.env.local
   cp packages/db/.env.example packages/db/.env.local
   
   # Edit with your values
   nano apps/api/.env.local
   ```

3. **Database setup**
   ```bash
   # Generate and run migrations
   pnpm db:generate
   pnpm db:migrate
   
   # Optional: Open Drizzle Studio
   pnpm db:studio
   ```

4. **Development**
   ```bash
   # Start all services
   pnpm dev
   
   # Or individually
   pnpm dev:web  # Frontend only
   ```

## 📦 Scripts

### Root Level
- `pnpm dev` - Start all development servers
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Lint all code with Ultracite
- `pnpm format` - Format all code
- `pnpm clean` - Clean all node_modules and build artifacts

### Database
- `pnpm db:generate` - Generate Drizzle migrations
- `pnpm db:migrate` - Run database migrations  
- `pnpm db:studio` - Open Drizzle Studio (port 3005)
- `pnpm db:pull` - Pull schema from database

### UI Components
- `pnpm sh:add` - Add new shadcn/ui components

## 🔧 Development

### Contract-First Development
This project follows ORPC contract-first principles:

1. **Define contracts** in `packages/contract`
2. **Implement routers** in `apps/api/src/router`
3. **Use type-safe clients** in `apps/web`

### Adding New Features
1. Define schemas in `packages/contract/src/schemas`
2. Create contracts in `packages/contract/src/contract`
3. Implement handlers in `apps/api/src/router`
4. Use in frontend with full type safety

## 🌐 Services

- **API Server**: http://localhost:3000
- **Web App**: http://localhost:3001
- **API Docs**: http://localhost:3000/api/docs
- **Database Studio**: http://localhost:3005

## 📚 Tech Stack

- **Framework**: Next.js 15 + Hono
- **API**: ORPC (Type-safe RPC)
- **Database**: PostgreSQL + Drizzle ORM
- **Auth**: Better Auth
- **UI**: Tailwind CSS + shadcn/ui
- **Validation**: Zod
- **Monorepo**: pnpm workspaces + Turbo
- **Code Quality**: Biome + Ultracite

## 📖 Documentation

- [API Documentation](./apps/api/README.md)
- [Web App Documentation](./apps/web/README.md)
- [Database Documentation](./packages/db/README.md)
- [Contract Documentation](./packages/contract/README.md)
- [UI Components](./packages/ui/README.md)
