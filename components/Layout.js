import React from "react";
// components/Layout.js
import { Header } from './Header';
import BottomBar from "./BottomBar";

export default function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      {/* No extra pt-* here; padding is controlled globally */}
      <main className="flex-1 px-4 md:px-6">{children}</main>
      <BottomBar />
    </div>
  );
}
