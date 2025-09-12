// components/Layout.js
import React from "react";
import Header from "./Header";
import BottomBar from "./BottomBar";

const HEADER_HEIGHT = 88;   // px — matches Header's fixed height
const BOTTOM_HEIGHT = 72;   // px — adjust if your BottomBar differs

export default function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main
        className="flex-1 px-4 md:px-6"
        style={{ paddingTop: HEADER_HEIGHT, paddingBottom: BOTTOM_HEIGHT }}
      >
        {children}
      </main>
      <BottomBar />
    </div>
  );
}
