// components/Header.js
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-black/95 backdrop-blur
        border-b border-neutral-800
        h-28 flex items-center justify-center
      "
    >
      <div className="w-auto max-h-full px-4">
        <Image
          src="/Dubular2.png"
          alt="dubUlar header logo"
          width={800}         // large base width
          height={200}        // large base height
          priority
          className="
            object-contain
            max-h-24          /* keep it big but capped to ~96px tall */
            w-auto
          "
        />
      </div>
    </header>
  );
}
