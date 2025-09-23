'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const items = [
  { href: "/",        label: "Home"    },
  { href: "/search",  label: "Search"  },
  { href: "/streams", label: "Live"    },
  { href: "/rank",    label: "Rank"    },
  { href: "/wallet",  label: "Wallet"  },
  { href: "/account", label: "Account" },
];

export default function BottomBar() {
  const pathname = usePathname();
  return (
    <nav className="bottom-bar">
      {items.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link key={href} href={href} className={`bottom-link ${active ? "active" : ""}`}>
            <span className="bottom-label">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
