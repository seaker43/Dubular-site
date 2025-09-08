// components/Header.js
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur h-20 flex items-center justify-center">
      {/* 75% of header width, full header height */}
      <div className="h-full flex items-center justify-center" style={{ width: "75%" }}>
        <Image
          src="/Dubular2.v2.png"
          alt="dubUlar header logo"
          width={1000}          // intrinsic width (any large value is fine)
          height={200}          // intrinsic height; rendered height comes from h-full
          sizes="75vw"
          priority
          className="h-full w-auto object-contain select-none pointer-events-none"
        />
      </div>
    </header>
  );
}
