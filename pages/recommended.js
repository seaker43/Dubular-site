import Link from "next/link";
import CarouselRow from "../ui/CarouselRow";
export default function Recommended(){const items=globalThis.__RECOMMENDED__||[];return(<main className="page"><h2 className="section-title glow"><Link href="/recommended">Recommended</Link></h2><CarouselRow title="Recommended" items={items}/></main>);} 