// src/components/Navbar.js
import Image from"next/image";
import Link from"next/link";

export default function Navbar() {
 return (
 <header className="nav">
 <div className="container row space">
 <Link href="/" className="brand">
 <Image
 src="/logo.svg"
 alt="Dubular"
 width={28}
 height={28}
 priority
 />
 <span>Dubular</span>
 </Link>

 <nav className="row gap navLinks">
 <Link href="#features">Features</Link>
 <Link href="#pricing">Pricing</Link>
 <Link href="#docs">Docs</Link>
 <a className="btn btnSmall btnPrimary" href="#signup">
 Get started
 </a>
 </nav>
 </div>
 </header>
 );
}
