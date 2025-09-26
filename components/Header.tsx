import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-black flex items-center justify-center p-4  sticky top-0 z-20">
      <Link href="/" className="bg-black flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Dubular Logo"
          width={260}
          height={60}
          priority
        />
      </Link>
    </header>
  );
}
