// components/Layout.js
import Header from "./Header";
import BottomBar from "./BottomBar";

export default function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 px-4">  {/* 👈 pt-32 pushes content below logo */}
        {children}
      </main>
      <BottomBar />
    </div>
  );
}
