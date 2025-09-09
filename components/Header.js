// components/Header.js
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur h-20 flex items-center justify-center">
      {/* Logo container: 60% width, full header height */}
      <div className="relative w-[60%] h-full">
        <Image
          src="/Dubular2.v2.png"
          alt="dubUlar header logo"
          fill
          priority
          className="object-cover object-top select-none pointer-events-none" 
        />
      </div>
    </header>
  );
}
