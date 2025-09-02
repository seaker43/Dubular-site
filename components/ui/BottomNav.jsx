import Link from "next/link";
import { IconRanks, IconFavs, IconSearch, IconWallet, IconUser } from "./Icons";

const Item = ({ href, label, children }) => (
  <Link href={href} className="flex flex-col items-center gap-1 px-3 py-1.5 text-[12px]"
        style={{ color:"#b6cbd2" }}>
    <span className="rounded-xl"
      style={{ color:"#00e6ff", textShadow:"0 0 10px rgba(0,230,255,.6)" }}>
      {children}
    </span>
    <span style={{opacity:.85}}>{label}</span>
  </Link>
);

export default function BottomNav(){
  return (
    <nav aria-label="Shortcuts"
      className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur"
      style={{
        background:"rgba(5,12,18,.82)",
        borderTop:"1px solid rgba(255,255,255,.06)"
      }}>
      <div className="mx-auto max-w-screen-sm flex justify-between px-2 py-2">
        <Item href="/leaderboards" label="Ranks"><IconRanks/></Item>
        <Item href="/favorites" label="Favs"><IconFavs/></Item>
        <Item href="/search" label="Search"><IconSearch/></Item>
        <Item href="/wallet" label="Wallet"><IconWallet/></Item>
        <Item href="/account" label="Account"><IconUser/></Item>
      </div>
    </nav>
  );
}
