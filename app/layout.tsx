export const runtime = "edge";

import type { ReactNode } from "react";
import "./globals.css";
import "../styles/bottom-bar.css";

import Header from "../components/Header";
import BottomBar from "../components/BottomBar";

export const metadata = {
  title: "Dubular",
  description: "Dubular site",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white pt-14 pb-[calc(64px+env(safe-area-inset-bottom))]">
        <Header />
        {/* leave room for fixed bottom bar */}
        <main className="min-h-[calc(100dvh-64px)] pb-[calc(64px+env(safe-area-inset-bottom))]">{children}</main>
        <BottomBar />
      </body>
    </html>
  );
}
