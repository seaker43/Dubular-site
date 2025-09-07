// components/Header.jsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-neutral-950/90 backdrop-blur
        border-b border-neutral-800
        h-14 flex items-center justify-center
      "
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"          // must be in /public/logo.svg
          alt="dubUlar Logo"
          width={140}
          height={36}
          priority
          className="select-none"
        />
      </Link>
    </header>
  );
}
