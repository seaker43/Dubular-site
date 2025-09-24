import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-neutral-950 sticky top-0 z-20">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Dubular Logo"
          width={160}
          height={60}
          priority
        />
      </Link>
    </header>
  );
}
