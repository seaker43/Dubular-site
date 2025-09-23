import Link from "next/link";
import DubularLogo from "./DubularLogo";
export default function Header(){return(<header className="flex items-center justify-between p-4 bg-neutral-950 text-cyan-400 sticky top-0 z-20"><Link href="/" className="flex items-center gap-2"><DubularLogo/></Link></header>);} 
