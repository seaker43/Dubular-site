'use client';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur">
      <Link href="/">
        <Image
          src="/Dubular2.v2.png"
          alt="dubUlar Logo"
          width={140}
          height={40}
          priority
        />
      </Link>
    </header>
  );
}
