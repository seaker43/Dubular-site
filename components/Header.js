// components/Header.js
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="site-header fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center"
      style={{ height: "88px", border: "none" }}
    >
      {/* Centered logo */}
      <div className="h-[60px] flex items-center justify-center w-full">
        <img
          src="/Dubular2.v2.png"  // file lives in /public with this exact case
          alt="dubUlar header logo"
          width="180"
          height="60"
          loading="eager"
          decoding="async"
          style={{ objectFit: "contain", display: "block" }}
        />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
