"use client";
import "../styles/globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";
import AppProviders from "@/components/AppProviders";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = { title: "Dubular" } as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <html lang="en">
        <body className="flex flex-col text-white">
          <AppProviders>
            <Header />
            {children}
            <BottomBar />
          </AppProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
