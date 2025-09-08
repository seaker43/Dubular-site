// components/Header.js
import Image from "next/image";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="site-header">
      {/* 75% of header width, 90% of header height; centered */}
      <div className="relative w-3/4 h-[90%] flex items-center justify-center">
        <Image
          src="/Dubular2.v2.png"   // or "/Dubular2.png" if that's the file you want
          alt="dubUlar header logo"
          fill
          priority
          sizes="75vw"
          className="object-contain select-none pointer-events-none"
        />
      </div>
    </Header>
  );
});

Header.displayName = "Header";
export default Header;
