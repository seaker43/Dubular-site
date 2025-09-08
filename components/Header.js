// components/Header.jsx
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        relative fixed top-0 left-0 right-0 z-50
        h-14 border-b border-neutral-800
        bg-black/90 backdrop-blur
        flex items-center justify-center
      "
    >
      {/* Stretched image with NO CROPPING */}
      <div className="relative w-full h-full">
        <Image
          src="/header-logo.png"   // must exist in /public
          alt="dubUlar header logo"
          fill
          priority
          className="object-contain object-center opacity-95 pointer-events-none select-none"
          sizes="100vw"
        />
      </div>
    </header>
  );
}
