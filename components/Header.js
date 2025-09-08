// components/Header.jsx
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center border-none"
      style={{ height: "72px" }} // 10% shorter than h-20
    >
      <Image
        src="/Dubular2.png"
        alt="dubUlar logo"
        width={360}   // adjust if your source logo file has different resolution
        height={72}
        className="block"
        style={{
          width: "95%",   // 5% less wide
          height: "auto",
        }}
        priority
      />
    </header>
  );
}
