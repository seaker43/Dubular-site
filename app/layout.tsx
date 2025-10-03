import "../styles/globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";
import AppProviders from "@/components/AppProviders";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = { title: "Dubular" } as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
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
