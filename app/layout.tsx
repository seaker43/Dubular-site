export const runtime = 'edge';


export const dynamic='force-dynamic';
import "../styles/globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";
import AppProviders from "@/components/AppProviders";
import ClientProviders from "@/components/ClientProviders";
import Analytics from "@/components/Analytics";

export const metadata = { title: "Dubular" } as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col text-white">
        <ClientProviders>
          <AppProviders>
            <Header />
            {children}
            <BottomBar />
          </AppProviders>
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
