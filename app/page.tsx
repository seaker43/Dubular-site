"use client";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import LiveRow from "../components/LiveRow";

import React from "react";
import Link from "next/link";

/** ------- Mock data (swap later) ------- */
const liveNow = [
  { id: "lv1", title: "Arena Finals", img: "/thumbnails/live1.jpg", href: "/watch/lv1" },
  { id: "lv2", title: "Night Vibes", img: "/thumbnails/live2.jpg", href: "/watch/lv2" },
  { id: "lv3", title: "IRL Walk", img: "/thumbnails/live3.jpg", href: "/watch/lv3" },
  { id: "lv4", title: "Music Set", img: "/thumbnails/live4.jpg", href: "/watch/lv4" },
];

/** small card using globals.css classes */
function Thumb({ item, glow = "glow-dual", live = false }) {
  return (<>
      <Header />\n      <main className="pb-20">
    <Link href={item.href} className={`thumb-card ${glow}`} prefetch={false}>
      <div className="thumb-img-wrapper">
        <img src={item.img} alt={item.title} className="thumb-img" />
        {live && <span className="live-badge">LIVE</span>}
      </div>
      <p className="thumb-title">{item.title}</p>
    </Link>
  );
}

export default function HomePage() {
  return (<>
      <Header />\n      <main className="pb-20">
    <main className="page">
      <LiveRow />
      <h1 className="section-title">Trending Now</h1>
      <div className="thumb-row">
        {liveNow.map((item) => (
          <Thumb key={item.id} item={item} live />
        ))}
      </div>
    </main>
  );
}
