import type { Metadata } from "next";
import { Toaster } from "@repo/ui/components/sonner";
import "@repo/ui/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}