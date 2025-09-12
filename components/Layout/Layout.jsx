// components/Layout/Layout.jsx
import React from "react";
import Header from "../Header";
import BottomBar from "../BottomBar";

export default function Layout({ children }) {
 return (
 <div className="min-h-dvh w-dvw bg-black text-white">
 {/* Fixed header (88px tall) */}
 <Header />

 {/* Page content, pushed below header, full-bleed, no side padding */}
 <main
 className="relative w-full pt-[88px] pb-20 overflow-x-hidden"
 style={{
 // Hard-stop any stray horizontal padding
 paddingLeft: 0,
 paddingRight: 0,
 }}
 >
 {children}
 </main>

 {/* Sticky bottom bar */}
 <BottomBar />
 </div>
 );
}
