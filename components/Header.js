import React, { forwardRef } from "react";
import Image from "next/image";

const Header = forwardRef(function Header(_props, ref) {
  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center"
      style={{ height: 88, border: "none" }}
    >
      <div className="relative h-full w-full max-w-none">
        <Image
          src="/Dubular2.v2.png"
          alt="Dubular"
          fill
          priority
          className="object-cover object-top select-none pointer-events-none"
          sizes="100vw"
        />
      </div>
    </header>
  );
});

export default Header;
