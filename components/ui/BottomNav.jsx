import Link from "next/link";
import { IconRanks, IconFavs, IconSearch, IconWallet, IconUser } from "./Icons";

const Item = ({ href, label, color, children }) => (
  <Link href={href} className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-[12px]">
    <span style={{ color }}>{children}</span>
    <span style={{ color, fontSize:"11px" }}>{label}</span>
  </Link>
);

export default function BottomNav(){
  return (
    <nav aria-label="Shortcuts"
      className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur"
      style={{
        background:"rgba(5,12,18,.95)",
        borderTop:"1px solid rgba(255,255,255,.08)",
        boxShadow:"0 -2px 8px rgba(0,0,0,.4)"
      }}>
      <div className="mx-auto max-w-screen-sm flex justify-between px-2 py-2">
        <Item href="/leaderboards" label="Ranks" color="gold"><IconRanks/></Item>
        <Item href="/favorites" label="Favs" color="crimson"><IconFavs/></Item>
        <Item href="/search" label="Search" color="white"><IconSearch/></Item>
        <Item href="/wallet" label="Wallet" color="limegreen"><IconWallet/></Item>
        <Item href="/account" label="Account" color="#00e6ff"><IconUser/></Item>
      </div>
    </nav>
  );
}
