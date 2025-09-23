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
      <body className="bg-black text-white">
        <Header />
        {/* leave room for fixed bottom bar */}
        <main className="min-h-[calc(100dvh-64px)] pb-20">{children}</main>
        <BottomBar />
      </body>
    </html>
  );
}
