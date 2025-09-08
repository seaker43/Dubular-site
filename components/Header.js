// components/Header.js
import Image from "next/image";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="site-header">
      <div className="relative w-[75%] h-[90%] flex items-center justify-center">
        <Image
          src="/Dubular2.v2.png"   // <— new filename to bypass cache
          alt="dubUlar header logo"
          fill
          priority
          className="object-contain select-none pointer-events-none"
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
