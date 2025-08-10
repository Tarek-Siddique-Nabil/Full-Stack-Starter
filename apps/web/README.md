# Web Application

Next.js 15 frontend application with type-safe ORPC client integration.

## 🚀 Features

- **Next.js 15** with App Router
- **Type-safe API** calls with ORPC
- **Authentication** integration
- **UI Components** with shadcn/ui
- **Real-time** updates with TanStack Query
- **Responsive** design with Tailwind CSS

## 🏗️ Architecture

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and configurations
└── constants/       # Application constants
```

## 🔧 Development

### Start Development Server
```bash
pnpm dev
```
App starts at: http://localhost:3001

### Build for Production
```bash
pnpm build
pnpm start
```

### Type Checking
```bash
pnpm typecheck
```

### Linting
```bash
pnpm lint
pnpm lint:fix
```

## 📦 Key Features

### ORPC Integration
- Type-safe API calls
- Automatic request/response validation
- React Query integration for caching

### Authentication
- JWT-based authentication
- Protected routes
- User session management

### UI Components
- Pre-built shadcn/ui components
- Consistent design system
- Dark/light theme support

## 🎨 Adding UI Components

```bash
# From root directory
pnpm sh:add button
pnpm sh:add card
pnpm sh:add dialog
```

Components are added to `packages/ui/src/components`

## 📚 Key Files

- `src/app/layout.tsx` - Root layout and providers
- `src/components/providers.tsx` - React Query and theme providers
- `src/lib/api.ts` - ORPC client configuration
- `src/components/theme-toggle.tsx` - Theme switcher

## 🔗 API Integration

The app uses ORPC client for type-safe API calls:

```typescript
import { api } from '@/lib/api'

// Type-safe API calls
const { data: todos } = api.todos.list.useQuery({
  limit: 10,
  cursor: 0
})
```

## 🌐 Pages

- `/` - Home page
- `/auth/signin` - Sign in page  
- `/auth/signup` - Sign up page
- `/dashboard` - Protected dashboard
- `/todos` - Todo management

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS utilities
- Flexible grid layouts
- Touch-friendly interactions

## 🎯 Performance

- Next.js optimizations
- React Query caching
- Code splitting
- Image optimization
- Bundle analysis available

## 🔧 Configuration

Environment variables (see `.env.example`):
- `NEXT_PUBLIC_API_URL` - API server URL
- `NEXT_PUBLIC_APP_URL` - Frontend URL
