import Image from "next/image";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="
        fixed top-0 left-0 right-0 z-50
        h-28 md:h-32   /* header height */
        bg-black/95 backdrop-blur
        border-b border-neutral-800
        flex items-center justify-center
        overflow-hidden
      "
    >
      <div className="relative w-1/2 h-[90%] flex items-center justify-center">
        <Image
          src="/Dubular2.png"
          alt="dubUlar header logo"
          fill
          priority
          className="
            object-contain
            select-none pointer-events-none
          "
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
