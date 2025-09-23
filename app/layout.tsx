export const runtime = "edge";

import type { ReactNode } from "react";
import "./globals.css";
import "../styles/bottom-bar.css";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
export const metadata = {
  title: "Dubular",
  description: "Dubular — live loops",
};
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
