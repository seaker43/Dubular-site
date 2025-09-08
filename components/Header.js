// components/Header.js
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-black/95 backdrop-blur
        border-b border-neutral-800
        h-24 flex items-center justify-center
      "
    >
      <Image
        src="/Dubular2.png"     // 👈 your new logo in /public
        alt="dubUlar header logo"
        width={300}             // base size
        height={100}
        priority
        className="
          object-contain
          max-h-20               /* cap max height ~80px */
          w-auto
        "
      />
    </header>
  );
}
