// components/Header.js
import Image from "next/image";
import { forwardRef } from "react";

/**
 * Short banner-style header
 * - Fixed short height (cropped top/bottom)
 * - Image fills & covers the header area (no distortion)
 * - Overflow hidden to clip the logo cleanly
 */
const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="
        fixed top-0 left-0 right-0 z-50
        h-14 md:h-16                 /* ← shorter header height */
        bg-black/95 backdrop-blur
        border-b border-neutral-800
        overflow-hidden              /* ← crop top/bottom */
      "
    >
      <div className="relative w-full h-full">
        <Image
          src="/Dubular2.png"
          alt="dubUlar header logo"
          fill
          priority
          sizes="100vw"
          className="
            object-cover              /* ← fills box, crops top/bottom */
            object-center             /* center the crop; change to object-[50%_45%] to bias */
            select-none pointer-events-none
          "
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
