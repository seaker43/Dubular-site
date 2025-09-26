import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-black sticky top-0 z-20 h-[90px] flex items-center justify-center">
      <Link href="/" className="bg-black flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Dubular Logo"
          width={220}
          height={60}
          priority
        />
      </Link>
    </header>
  );
}
