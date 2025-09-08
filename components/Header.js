import Image from "next/image";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="site-header">
      {/* logo is constrained by this box: 75% width, 90% height of header */}
      <div className="relative w-3/4 h-[90%] flex items-center justify-center">
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
