// components/Header.js
import Image from "next/image";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="site-header fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center"
      style={{ height: "88px", border: "none" }}
    >
      {/* logo: centered, no cropping */}
      <div className="relative h-[60px] w-auto">
        <Image
          src="/Dubular2.v2.png"
          alt="dubUlar header logo"
          width={180}
          height={60}
          priority
          className="object-contain select-none pointer-events-none"
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
