'use client';

import { Button } from '@repo/ui/components/button';
import { Card, CardContent } from '@repo/ui/components/card';
import { ArrowLeft, Home, Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-6 p-8 text-center">
          {/* 404 Number */}
          <div className="font-bold text-6xl text-muted-foreground">404</div>

          {/* Search Icon */}
          <div className="rounded-full bg-muted p-3">
            <Search className="size-8 text-muted-foreground" />
          </div>

          {/* Title and Description */}
          <div className="space-y-2">
            <h1 className="font-semibold text-2xl tracking-tight">
              Page Not Found
            </h1>
            <p className="text-muted-foreground">
              Sorry, we couldn't find the page you're looking for. The page
              might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full justify-center gap-3 sm:flex-row">
            <Button
              className="flex items-center gap-2"
              onClick={() => router.back()}
              variant="outline"
            >
              <ArrowLeft className="size-4" />
              Go Back
            </Button>

            <Button asChild className="flex items-center gap-2">
              <Link href="/">
                <Home className="size-4" />
                Home
              </Link>
            </Button>
          </div>

          {/* Additional Help */}
          <div className="text-muted-foreground text-sm">
            Need help?{' '}
            <Link
              className="text-primary underline-offset-4 hover:underline"
              href="/settings"
            >
              Contact support
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
