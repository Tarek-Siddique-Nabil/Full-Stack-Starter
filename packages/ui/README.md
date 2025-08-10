# UI Package

Shared React components library built with shadcn/ui, Tailwind CSS, and advanced animations.

## 🎨 Features

- **shadcn/ui** components with modern design
- **Tailwind CSS** for styling
- **Aceternity UI** advanced animations
- **Magic UI** enhanced components
- **TypeScript** support
- **Responsive** design patterns
- **Dark mode** support

## 🏗️ Structure

```
src/
├── components/          # Core UI components
│   ├── ui/             # shadcn/ui base components
│   │   ├── button.tsx  # Button variants
│   │   ├── input.tsx   # Form inputs
│   │   ├── card.tsx    # Content cards
│   │   └── ...         # More components
│   ├── aceternity/     # Advanced animations
│   │   └── ...         # Animation components
│   └── magicui/        # Enhanced UI components
│       └── ...         # Magic UI components
├── hooks/              # React hooks
│   └── use-mobile.ts   # Mobile detection
├── lib/
│   └── utils.ts        # Utility functions
└── styles/             # Global styles
    └── globals.css     # Tailwind imports
```

## 🧩 Available Components

### Form Components
- `Button` - Multiple variants and sizes
- `Input` - Text input with validation states
- `PasswordInput` - Password with visibility toggle
- `Textarea` - Multi-line text input
- `Checkbox` - Checkboxes with labels
- `RadioGroup` - Radio button groups
- `Select` - Dropdown selections
- `Switch` - Toggle switches
- `Form` - Form wrapper with validation

### Layout Components
- `Card` - Content containers
- `Dialog` - Modal dialogs
- `Sheet` - Side panels
- `Popover` - Floating content
- `Tooltip` - Hover information
- `Separator` - Visual dividers
- `Tabs` - Tab navigation
- `Collapsible` - Expandable content

### Navigation
- `Breadcrumb` - Navigation breadcrumbs
- `Command` - Command palette
- `DropdownMenu` - Dropdown menus
- `Sidebar` - Navigation sidebars

### Data Display
- `Avatar` - User avatars
- `Badge` - Status indicators
- `Calendar` - Date selection
- `Carousel` - Image/content sliders
- `Skeleton` - Loading placeholders
- `Sonner` - Toast notifications

## 🚀 Usage

### Basic Component
```tsx
import { Button } from '@repo/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/card'

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default" size="md">
          Click me
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Form Components
```tsx
import { Input } from '@repo/ui/input'
import { Label } from '@repo/ui/label'
import { Button } from '@repo/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@repo/ui/form'

export function ContactForm() {
  return (
    <Form>
      <FormField
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
```

### Mobile Detection Hook
```tsx
import { useMobile } from '@repo/ui/hooks/use-mobile'

export function ResponsiveComponent() {
  const isMobile = useMobile()
  
  return (
    <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
      Content adapts to screen size
    </div>
  )
}
```

## 🎨 Styling System

### Tailwind Configuration
Components use Tailwind CSS with design tokens:

```css
/* CSS Variables for theming */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

### Component Variants
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    }
  }
)
```

## 🌙 Dark Mode Support

All components support dark mode through CSS variables:

```tsx
import { ThemeProvider } from 'next-themes'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* Your app components */}
    </ThemeProvider>
  )
}
```

## 📱 Responsive Design

Components include responsive utilities:

```tsx
<Card className="w-full md:w-1/2 lg:w-1/3">
  <CardContent className="p-4 md:p-6">
    Responsive padding and width
  </CardContent>
</Card>
```

## 🎭 Advanced Animations

### Aceternity Components
```tsx
import { FloatingNav } from '@repo/ui/aceternity/floating-nav'
import { HeroParallax } from '@repo/ui/aceternity/hero-parallax'

// Advanced animated components
<FloatingNav navItems={navItems} />
<HeroParallax products={products} />
```

### Magic UI Components
```tsx
import { AnimatedBeam } from '@repo/ui/magicui/animated-beam'
import { NumberTicker } from '@repo/ui/magicui/number-ticker'

// Enhanced UI with micro-interactions
<NumberTicker value={1000} />
<AnimatedBeam duration={3} />
```

## 🔧 Development

### Adding New Components

1. **Create Component**
   ```tsx
   // src/components/ui/new-component.tsx
   import { cn } from '@repo/ui/lib/utils'
   
   export function NewComponent({ className, ...props }) {
     return (
       <div className={cn('base-styles', className)} {...props} />
     )
   }
   ```

2. **Export Component**
   ```tsx
   // Update package exports
   export { NewComponent } from './components/ui/new-component'
   ```

### Component Guidelines

1. **Composition** - Build with small, reusable pieces
2. **Accessibility** - Include ARIA attributes
3. **Variants** - Use class-variance-authority (cva)
4. **TypeScript** - Full type safety
5. **Responsive** - Mobile-first design
6. **Performance** - Minimize bundle size

## 📦 Dependencies

### Core
- `react` - React library
- `@radix-ui/*` - Headless UI primitives
- `class-variance-authority` - Variant utilities
- `clsx` - Conditional classes
- `tailwind-merge` - Merge Tailwind classes

### Styling
- `tailwindcss` - Utility-first CSS
- `tailwindcss-animate` - Animation utilities
- `next-themes` - Theme switching

### Icons
- `lucide-react` - Icon library
- `@tabler/icons-react` - Additional icons

## 🎯 Best Practices

1. **Consistency** - Follow design system patterns
2. **Accessibility** - Test with screen readers
3. **Performance** - Lazy load heavy components
4. **Theming** - Use CSS variables for colors
5. **Testing** - Write component tests
6. **Documentation** - Document component APIs

## 🔄 Updates

To update shadcn/ui components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

Components are automatically configured for the monorepo setup.
