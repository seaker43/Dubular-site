import Image from "next/image";
import { forwardRef } from "react";

/**
 * Banner header with centered logo at 50% size and blend
 */
const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="
        fixed top-0 left-0 right-0 z-50
        h-24 md:h-28
        bg-black/95 backdrop-blur
        border-b border-neutral-800
        flex items-center justify-center
        overflow-hidden
      "
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/Dubular2.png"
          alt="dubUlar header logo"
          width={400}   // 👈 controls logo size
          height={200}
          priority
          className="
            object-contain
            max-h-[50%]   // 👈 50% smaller
            select-none pointer-events-none
          "
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
