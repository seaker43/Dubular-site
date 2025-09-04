import Link from "next/link";
import { useRouter } from "next/router";

const Item = ({ href, label, icon, active }) => (
  <Link href={href} aria-label={label} legacyBehavior>
    <a
      style={{
        textDecoration: "none",
        color: active ? "#7fffea" : "rgba(223,255,250,.85)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "10px 6px",
        borderRadius: 14,
        background: active
          ? "radial-gradient(80% 80% at 50% 30%, rgba(0,255,220,.12), rgba(0,18,25,.0))"
          : "transparent",
        boxShadow: active ? "0 0 22px rgba(0,255,220,.18) inset" : "none",
        minWidth: 62
      }}
    >
      {icon}
      <span style={{ fontSize: 12, letterSpacing: .2 }}>{label}</span>
    </a>
  </Link>
);

export default function BottomBar() {
  const { pathname } = useRouter();

  const baseIcon = (d) => (
    <svg width="22" height="22" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round"
         style={{ opacity: .95 }}>
      {d}
    </svg>
  );

  const items = [
    {
      href: "/ranks", label: "Ranks",
      icon: baseIcon(<>
        <path d="M3 17v4h4v-4z"></path>
        <path d="M10 13v8h4v-8z"></path>
        <path d="M17 9v12h4V9z"></path>
      </>)
    },
    {
      href: "/search", label: "Search",
      icon: baseIcon(<>
        <circle cx="11" cy="11" r="7"></circle>
        <path d="m21 21-3.5-3.5"></path>
      </>)
    },
    {
      href: "/", label: "Home",
      icon: baseIcon(<>
        <path d="M3 11l9-7 9 7"></path>
        <path d="M9 21V9h6v12"></path>
      </>)
    },
    {
      href: "/wallet", label: "Wallet",
      icon: baseIcon(<>
        <rect x="3" y="6" width="18" height="12" rx="3"></rect>
        <path d="M15 12h3"></path>
      </>)
    },
    {
      href: "/account", label: "Account",
      icon: baseIcon(<>
        <path d="M20 21a8 8 0 1 0-16 0"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </>)
    }
  ];

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background:
          "linear-gradient(180deg, rgba(0,18,25,.72), rgba(0,18,25,.92))",
        borderTop: "1px solid rgba(0,255,220,.12)",
        backdropFilter: "blur(6px)"
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "8px 12px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4
        }}
      >
        {items.map((it) => (
          <Item key={it.href}
                href={it.href}
                label={it.label}
                icon={it.icon}
                active={pathname === it.href || (it.href === "/" && pathname === "")}/>
        ))}
      </div>
    </nav>
  );
}
