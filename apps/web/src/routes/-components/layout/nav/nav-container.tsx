import type { ReactNode } from "react";

export default function NavContainer({
  children,
}: Readonly<{
  children?: ReactNode;
}>) {
  return (
    <div className="flex h-12 items-center justify-between bg-nav px-2 text-lg md:px-4">
      {children}
    </div>
  );
}
