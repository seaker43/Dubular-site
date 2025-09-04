import Link from "next/link";
import CarouselRow from "../ui/CarouselRow";
export default function Trending(){const items=globalThis.__TRENDING__||[];return(<main className="page"><h2 className="section-title glow"><Link href="/trending">Trending Now</Link></h2><CarouselRow title="Trending Now" items={items}/></main>);} 