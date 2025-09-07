// components/Header.jsx
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        relative fixed top-0 left-0 right-0 z-50
        h-14 border-b border-neutral-800
        bg-black/90 backdrop-blur
      "
    >
      {/* Stretched, NO CROPPING */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/logo-header.png"      // put your PNG in /public/logo-header.png
          alt="dubUlar header graphic"
          fill
          priority
          className="
            object-contain object-center
            opacity-95 pointer-events-none select-none
          "
          sizes="100vw"
        />
      </div>
    </header>
  );
}
