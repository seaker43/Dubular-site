// components/Header.jsx
import Image from "next/image";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="site-header fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur h-20 overflow-hidden"
    >
      {/* full header box; center inner wrapper */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* logo wrapper: 75% width, 90% height of header */}
        <div className="relative w-3/4 h-[90%]">
          <Image
            src="/Dubular2.png"
            alt="dubUlar header logo"
            fill
            priority
            className="object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
