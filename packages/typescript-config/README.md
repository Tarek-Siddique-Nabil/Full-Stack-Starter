# TypeScript Config Package

Shared TypeScript configurations for the monorepo with optimized settings for different project types.

## 📋 Configurations

### Base Configuration (`base.json`)
- **Core TypeScript** settings
- **Modern ES2022** target
- **Strict type checking** enabled
- **Path mapping** support
- **Declaration** generation

### Next.js Configuration (`nextjs.json`)
- **Next.js optimized** settings
- **JSX preserve** for Next.js compiler
- **Incremental compilation**
- **App Router** support
- **React 19** compatibility

### React Library Configuration (`react-library.json`)
- **Component library** optimizations
- **Declaration files** generation
- **ESM/CJS** dual output
- **Tree shaking** support
- **Peer dependencies** handling

## 🏗️ Structure

```
src/
├── base.json              # Base TypeScript config
├── nextjs.json           # Next.js specific config
├── react-library.json    # React library config
├── package.json          # Package configuration
└── README.md            # Documentation
```

## 🚀 Usage

### In Applications (apps/*)

#### Next.js App (`apps/web`)
```json
{
  "extends": "@repo/typescript-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

#### API Server (`apps/api`)
```json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### In Packages (packages/*)

#### UI Library (`packages/ui`)
```json
{
  "extends": "@repo/typescript-config/react-library.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### Database Package (`packages/db`)
```json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "declaration": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "drizzle"]
}
```

## ⚙️ Configuration Details

### Base Configuration Features
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }]
  }
}
```

### Next.js Optimizations
- **Incremental compilation** for faster builds
- **Plugin support** for Next.js compiler
- **JSX preserve** for optimal performance
- **App Router** type support
- **Turbopack** compatibility

### React Library Features
- **Declaration generation** for type exports
- **Composite projects** support
- **External helpers** for smaller bundles
- **Import helpers** optimization
- **Peer dependency** resolution

## 🔧 Customization

### Adding Path Mapping
```json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"]
    }
  }
}
```

### Environment-Specific Settings
```json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 🎯 Best Practices

### 1. Extend Appropriately
Choose the right base configuration:
- **base.json** - Node.js services, utilities
- **nextjs.json** - Next.js applications
- **react-library.json** - React component libraries

### 2. Path Mapping
Use consistent path aliases across packages:
```json
"paths": {
  "@/*": ["./src/*"],
  "@/components/*": ["./src/components/*"]
}
```

### 3. Include/Exclude Patterns
Be specific about what to compile:
```json
{
  "include": ["src/**/*", "types/**/*"],
  "exclude": ["node_modules", "dist", "build", "**/*.test.ts"]
}
```

### 4. Composite Projects
For package dependencies:
```json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true
  },
  "references": [
    { "path": "../db" },
    { "path": "../contract" }
  ]
}
```

## 🔄 Maintenance

### Updating Configurations

1. **Bump TypeScript** version in dependencies
2. **Test compatibility** across packages
3. **Update target/lib** settings if needed
4. **Review strict** settings for new features

### Version Compatibility
- **TypeScript 5.3+** - Latest features
- **Next.js 14+** - App Router support
- **React 18+** - Modern React features
- **Node.js 18+** - Modern runtime

## 📦 Dependencies

### Runtime
- `typescript` - TypeScript compiler

### Development
- `@types/node` - Node.js type definitions

## 🚨 Common Issues

### Path Resolution
```typescript
// ❌ Relative imports
import { Button } from '../../../components/ui/button'

// ✅ Path mapping
import { Button } from '@/components/ui/button'
```

### Module Resolution
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler", // For modern bundlers
    "allowImportingTsExtensions": true, // For .ts imports
    "noEmit": true // When bundler handles compilation
  }
}
```

### Monorepo References
```json
{
  "references": [
    { "path": "../shared-package" }
  ]
}
```

## 🎨 IDE Integration

### VS Code Settings
```json
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

### Build Performance
- Use **composite projects** for large monorepos
- Enable **incremental compilation**
- Configure **build caching** with Turbo
- Set appropriate **lib** and **target** versions

## 🔧 Troubleshooting

### Build Errors
1. Clear TypeScript cache: `rm -rf .tsbuildinfo`
2. Restart TypeScript server in IDE
3. Check path mapping configuration
4. Verify package references

### Performance Issues
1. Enable **skipLibCheck** for faster builds
2. Use **incremental** compilation
3. Optimize **include/exclude** patterns
4. Consider **project references** for large codebases
