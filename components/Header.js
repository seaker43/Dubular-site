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
      <div className="relative w-full h-full flex items-center justify-center px-4">
        <Image
          src="/Dubular2.png"
          alt="dubUlar header logo"
          fill   /* 👈 auto-fills the container */
          priority
          className="
            object-contain
            max-h-full max-w-full
            p-2
            select-none pointer-events-none
          "
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
