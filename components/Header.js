import Image from "next/image";
import { forwardRef } from "react";

/**
 * Banner header with cropped logo + bottom gradient blend
 */
const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="
        fixed top-0 left-0 right-0 z-50
        h-14 md:h-16
        bg-black/95 backdrop-blur
        border-b border-neutral-800
        overflow-hidden
      "
    >
      <div className="relative w-full h-full">
        {/* Logo image fills and crops */}
        <Image
          src="/Dubular2.png"
          alt="dubUlar header logo"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            select-none pointer-events-none
          "
        />

        {/* Bottom fade gradient overlay */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-8
            bg-gradient-to-b from-transparent to-black
            pointer-events-none
          "
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
