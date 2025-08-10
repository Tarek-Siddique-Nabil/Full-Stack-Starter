# Contract Package

ORPC contracts and schemas for type-safe API communication following contract-first development.

## 🚀 Features

- **Type-safe contracts** with ORPC
- **Zod validation** schemas
- **Shared types** between client and server
- **OpenAPI** generation support
- **Contract-first** development workflow

## 🏗️ Structure

```
src/
├── contract/         # ORPC contract definitions
│   ├── auth.ts      # Authentication contracts
│   ├── todo.ts      # Todo CRUD contracts
│   └── index.ts     # Contract aggregation
├── validation/       # Zod schemas (legacy)
│   ├── auth.ts      # Auth validation schemas
│   ├── user.ts      # User schemas with Drizzle integration
│   └── index.ts     # Schema exports
├── schemas/         # New Zod schemas
│   ├── auth.ts      # Authentication schemas
│   ├── todo.ts      # Todo schemas
│   ├── user.ts      # User schemas
│   └── index.ts     # Schema exports
└── index.ts         # Package exports
```

## 📋 Contracts

### Authentication
- `signup` - User registration
- `signin` - User authentication  
- `me` - Get current user profile

### Todos
- `list` - Get paginated todos
- `create` - Create new todo
- `get` - Get single todo by ID
- `update` - Update existing todo
- `delete` - Delete todo

## 🔧 Usage

### In API Server
```typescript
import { implement } from '@orpc/server'
import { contract } from '@repo/contract'

const os = implement(contract)

export const listTodos = os.todos.list.handler(({ input }) => {
  // Implementation with full type safety
})
```

### In Frontend
```typescript
import { createORPCClient } from '@orpc/client'
import { contract } from '@repo/contract'

const client = createORPCClient(contract, {
  url: 'http://localhost:3000/api'
})

// Type-safe API calls
const todos = await client.todos.list({ limit: 10 })
```

## 📚 Schema Validation

### Input Validation
```typescript
export const NewTodoSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  status: z.enum(['pending', 'in-progress', 'completed'])
})
```

### Output Transformation
```typescript
export const TodoSchema = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.date().transform(date => date.toISOString())
})
```

## 🔄 Contract-First Workflow

1. **Define Schema** in `src/schemas/`
   ```typescript
   export const UserSchema = z.object({
     id: z.string(),
     email: z.string().email(),
     name: z.string()
   })
   ```

2. **Create Contract** in `src/contract/`
   ```typescript
   export const getUser = oc
     .route({ method: 'GET', path: '/users/:id' })
     .input(z.object({ id: z.string() }))
     .output(UserSchema)
   ```

3. **Implement Handler** in API server
   ```typescript
   export const getUser = os.users.get.handler(({ input }) => {
     // Type-safe implementation
   })
   ```

4. **Use in Frontend** with full type safety
   ```typescript
   const user = await api.users.get({ id: '123' })
   ```

## 🌐 OpenAPI Integration

Contracts automatically generate OpenAPI specifications:

```typescript
import { OpenAPIGenerator } from '@orpc/openapi'
import { contract } from '@repo/contract'

const spec = await generator.generate(contract)
```

## 📦 Dependencies

### Core
- `@orpc/contract` - Contract definitions
- `@orpc/zod` - Zod integration
- `zod` - Schema validation
- `drizzle-zod` - Drizzle schema integration

### Database Integration
- `@repo/db` - Database schemas

## 🔧 Development

### Adding New Contracts

1. **Create Schema**
   ```typescript
   // src/schemas/feature.ts
   export const FeatureSchema = z.object({...})
   ```

2. **Define Contract**
   ```typescript
   // src/contract/feature.ts
   export const createFeature = oc
     .route({...})
     .input(FeatureSchema)
     .output(FeatureSchema)
   ```

3. **Export Contract**
   ```typescript
   // src/contract/index.ts
   export const contract = {
     features: { create: createFeature }
   }
   ```

## 🎯 Type Safety

The contract package ensures:
- **Compile-time** type checking
- **Runtime** validation with Zod
- **API documentation** generation
- **Client-server** type consistency

## 📋 Best Practices

1. **Schema First** - Define schemas before contracts
2. **Validation** - Use Zod for input validation
3. **Transformation** - Transform output for API responses
4. **Documentation** - Add summaries and tags to contracts
5. **Versioning** - Consider API versioning for breaking changes
