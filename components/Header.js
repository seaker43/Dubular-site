import Image from "next/image";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="site-header fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur h-20 flex items-center justify-center border-none overflow-hidden"
    >
      {/* logo now fills full width + height of header */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/Dubular2.png"
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
