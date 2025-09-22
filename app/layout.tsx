export const runtime = "edge";
import type { ReactNode } from "react";
import "./globals.css";
import "./globals.css";

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
