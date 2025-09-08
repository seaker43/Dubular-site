// components/Header.js
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-black/95 backdrop-blur
        border-b border-neutral-800
        flex items-center justify-center
        py-2
      "
    >
      <Image
        src="/Dubular2.png"   // 👈 natural-size logo in /public
        alt="dubUlar header logo"
        width={400}           // give a base size (adjust to your PNG’s natural width)
        height={120}
        priority
        className="object-contain w-auto h-auto"
      />
    </header>
  );
}
