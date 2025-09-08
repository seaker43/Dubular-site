// components/Header.jsx
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur flex justify-center border-none"
      style={{ height: "72px", paddingTop: "8px" }} // adjust padding as needed
    >
      <Image
        src="/Dubular2.png"
        alt="dubUlar logo"
        width={360}   // adjust based on your logo resolution
        height={72}
        className="block"
        style={{
          width: "120%",  // 20% wider
          height: "auto",
        }}
        priority
      />
    </header>
  );
}
