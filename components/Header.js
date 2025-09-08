// components/Header.js
import Image from "next/image";
import { forwardRef } from "react";

const Header = forwardRef(function Header(_, ref) {
  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center h-20"
    >
      {/* Logo fills 75% of header width and 100% of header height */}
      <div className="relative w-[75%] h-full flex items-center justify-center">
        <Image
          src="/Dubular2.png"   // update to your actual logo filename
          alt="dubUlar header logo"
          fill
          priority
          sizes="75vw"
          className="object-contain select-none pointer-events-none"
        />
      </div>
    </header>
  );
});

export default Header;
