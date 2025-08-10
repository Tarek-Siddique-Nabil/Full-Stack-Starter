# API Server

ORPC-based API server built with Hono, following contract-first development principles.

## 🚀 Features

- **Type-safe RPC** with ORPC contracts
- **Authentication** with Better Auth
- **Database** integration with Drizzle ORM
- **OpenAPI** documentation generation
- **Hot reload** development server

## 🏗️ Architecture

```
src/
├── handlers/          # HTTP handlers
├── lib/              # Utilities and configurations
├── middleware/       # ORPC middleware
├── router/           # ORPC route implementations
└── index.ts         # Server entry point
```

## 🔧 Development

### Start Development Server
```bash
pnpm dev
```
Server starts at: http://localhost:3000

### Build for Production
```bash
pnpm build
```

### Type Checking
```bash
pnpm typecheck
```

## 📚 Key Files

- `src/orpc.ts` - ORPC instance and middleware setup
- `src/router/index.ts` - Main router combining all routes
- `src/lib/auth.ts` - Better Auth configuration
- `src/middleware/db.ts` - Database middleware

## 🌐 Endpoints

### API Routes
- **Base**: `http://localhost:3000/api`
- **Health**: `GET /api/health`
- **Auth**: `POST /api/auth/*`
- **Todos**: `/api/todos/*`

### Documentation
- **OpenAPI Spec**: `GET /api/spec.json`
- **API Docs**: `GET /api/docs` (Scalar UI)

## 🔐 Authentication

Uses Better Auth with email/password:
- JWT tokens for session management
- Database-backed user sessions
- Middleware-based protection

## 📦 Dependencies

### Core
- `@orpc/server` - Type-safe RPC server
- `hono` - Web framework  
- `better-auth` - Authentication
- `@repo/contract` - Shared contracts
- `@repo/db` - Database layer

### Development
- `tsx` - TypeScript execution
- `dotenv` - Environment variables

## 🔧 Configuration

Environment variables (see `.env.example`):
- `DATABASE_URL` - PostgreSQL connection
- `BETTER_AUTH_SECRET` - Auth secret key
- `PORT` - Server port (default: 3000)

## 🚦 Health Check

```bash
curl http://localhost:3000/api/health
```

## 🐛 Debugging

Development server includes:
- Hot reload with tsx watch
- Detailed error messages
- ORPC development tools
