'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="header">
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
