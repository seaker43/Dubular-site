// components/Header.jsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur h-20 flex items-center justify-center border-none">
      <Image
        src="/Dubular2.png"
        alt="dubUlar logo"
        width={200}   // adjust to your preferred logo resolution
        height={60}
        priority
      />
    </header>
  );
}
