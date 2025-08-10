'use client';

import { Button } from '@repo/ui/components/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="group size-9 hover:cursor-pointer dark:bg-transparent dark:hover:bg-muted"
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      size={'sm'}
      variant="ghost"
    >
      {/* Note: After dark mode implementation, rely on dark: prefix rather than group-dark: */}
      <MoonIcon
        aria-hidden="true"
        className="shrink-0 scale-0 opacity-0 transition-all group-dark:scale-100 group-dark:opacity-100"
        size={16}
      />
      <SunIcon
        aria-hidden="true"
        className="absolute shrink-0 scale-100 opacity-100 transition-all group-dark:scale-0 group-dark:opacity-0"
        size={16}
      />
    </Button>
  );
}
