// components/Header.js
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        relative fixed top-0 left-0 right-0 z-50
        h-16 border-b border-neutral-800        /* ↑ a bit taller */
        bg-black/95 backdrop-blur
        flex items-center justify-center
      "
    >
      <Image
        src="/header-logo.png"
        alt="dubUlar header logo"
        fill
        priority
        sizes="100vw"
        className="
          object-contain object-center           /* ← no cropping, no stretch */
          w-full h-full opacity-95 pointer-events-none select-none
          px-4                                   /* small horizontal breathing room */
        "
      />
    </header>
  );
}
