# Full-Stack-Starter Monorepo

Full-Stack-Starter is a monorepo template for building full-stack applications using modern web technologies. The project includes a Next.js web app, React admin panel, Hono API backend, and shared packages.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap, build, and test the repository:
- Install Node.js 20.16+ (check with `node --version`)
- Install pnpm globally: `npm install -g pnpm@9.12.0`
- Copy environment: `cp .env.development .env` (REQUIRED - API will fail without this)
- Install dependencies: `pnpm install` -- takes 26 seconds. NEVER CANCEL. Set timeout to 60+ minutes.
- Lint all packages: `pnpm lint` -- takes 17 seconds. NEVER CANCEL. Set timeout to 30+ minutes.
- Type check all packages: `pnpm typecheck` -- takes 14 seconds. NEVER CANCEL. Set timeout to 30+ minutes.
- Build all packages: `pnpm build` -- takes 23 seconds. NEVER CANCEL. Set timeout to 60+ minutes.

### Run the development servers:
- ALWAYS run the bootstrapping steps first.
- Start all services: `pnpm dev` (starts web, admin, and API simultaneously)
- Or start individual services:
  - Web app (Next.js): `cd apps/web && pnpm dev` (http://localhost:3000)
  - Admin app (Vite): `cd apps/admin && pnpm dev` (http://localhost:5173)
  - API server (Hono): `cd packages/api && pnpm dev` (http://localhost:6578)

### Database commands:
- Push schema: `pnpm db:push` (requires PostgreSQL connection)
- Open studio: `pnpm db:studio` (may fail due to dotenv CLI version conflicts)
- Note: Database commands require a valid PostgreSQL connection string in .env

## Validation

### ALWAYS manually validate any new code:
- Build and lint before making changes: `pnpm build && pnpm lint`
- After making changes, test all affected applications
- ALWAYS run through at least one complete end-to-end scenario after making changes
- Always run `pnpm lint` and `pnpm typecheck` before you are done

### Validation scenarios to test after changes:
- **Web app validation**: Visit http://localhost:3000, verify UI renders correctly with form components and buttons
- **Admin app validation**: Visit http://localhost:5173, verify React app loads with shared UI components
- **API validation**: Visit http://localhost:6578, verify JSON response {"message":"Tasks API"}
- **API documentation**: Visit http://localhost:6578/reference for OpenAPI documentation
- **Build validation**: Ensure `pnpm build` completes successfully for all apps
- **Cross-package changes**: When modifying shared packages (@repo/ui, @repo/validators), test all consuming apps

## Technology Stack

### Applications:
- **apps/web**: Next.js 14.2.22 web application (port 3000)
- **apps/admin**: React + Vite admin panel (port 5173)

### Packages:
- **packages/api**: Hono backend API with OpenAPI docs (port 6578)
- **packages/db**: Drizzle ORM with PostgreSQL schemas
- **packages/ui**: Shared React components with Tailwind CSS and Radix UI
- **packages/validators**: Shared validation schemas with Zod

### Tooling:
- **Build system**: Turbo monorepo with pnpm workspaces
- **Linting**: ESLint with shared configs
- **Styling**: Tailwind CSS with shared config
- **TypeScript**: Shared tsconfig across packages

## Common Tasks

### Development workflow:
- Start development: `pnpm dev` (runs all services)
- Format code: `pnpm format` (check) or `pnpm format:fix` (auto-fix)
- Lint code: `pnpm lint` (check) or `pnpm lint:fix` (auto-fix)
- Type check: `pnpm typecheck`
- Build: `pnpm build`

### Key directories and files:
```
├── apps/
│   ├── web/                 # Next.js web application
│   └── admin/               # React admin panel
├── packages/
│   ├── api/                 # Hono backend API
│   ├── db/                  # Drizzle ORM schemas
│   ├── ui/                  # Shared React components
│   └── validators/          # Shared validation schemas
├── tooling/                 # Shared build and config tools
├── .env                     # Environment variables (copy from .env.development)
├── turbo.json              # Turbo build configuration
└── pnpm-workspace.yaml     # Workspace configuration
```

### Environment setup:
- Copy `.env.development` to `.env` before running API server
- Required environment variables: `NODE_ENV`, `DATABASE_URL`, `LOG_LEVEL`
- Database requires PostgreSQL connection string

### Package management:
- Use `pnpm` for all package operations
- Shared dependencies defined in catalog in `pnpm-workspace.yaml`
- Cross-package references use `workspace:*` protocol

### Build system notes:
- Turbo handles task orchestration and caching
- Dependencies built before dependents (packages → apps)
- Cache stored in `.cache/` directories
- All builds are incremental with dependency tracking

## Troubleshooting

### Common issues:
- **API fails to start**: Ensure `.env` file exists (copy from `.env.development`)
- **Build failures**: Run `pnpm install` and ensure Node.js 20.16+ is installed
- **Database studio fails**: Known issue with dotenv CLI version conflicts
- **Import errors**: Check package.json exports and ensure packages are built

### Performance expectations:
- Initial `pnpm install`: ~26 seconds
- Full build (`pnpm build`): ~23 seconds  
- Linting (`pnpm lint`): ~17 seconds
- Type checking (`pnpm typecheck`): ~14 seconds
- Dev server startup: 1-2 seconds per service

### Critical reminders:
- NEVER CANCEL build, lint, or typecheck commands
- Always set timeouts of 30-60+ minutes for build operations
- Environment file (.env) is required for API functionality
- Test all affected applications after making changes
- Use `pnpm` instead of npm for all operations