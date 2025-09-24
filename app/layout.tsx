import "../styles/globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import BottomBar from "@/components/BottomBar";
export const metadata = { title: "Dubular" } as const;
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-neutral-950 text-white">
        <Header />
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
