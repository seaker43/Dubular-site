import React from "react";
// pages/most-liked.js
import Head from "next/head";
import Thumb from "../components/Thumb";

const items = [
  {
    title: "Pixel Art #1",
    category: "art",
    tag: "pixel",
    imgSrc: "/thumbs/art/pixel-1.jpg",
    href: "/art/1",
  },
  {
    title: "Pixel Art #2",
    category: "art",
    tag: "pixel",
    imgSrc: "/thumbs/art/pixel-2.jpg",
    href: "/art/2",
  },
  {
    title: "Pixel Art #3",
    category: "art",
    tag: "pixel",
    imgSrc: "/thumbs/art/pixel-3.jpg",
    href: "/art/3",
  },
  {
    title: "Pixel Art #4",
    category: "art",
    tag: "pixel",
    imgSrc: "/thumbs/art/pixel-4.jpg",
    href: "/art/4",
  },
  {
    title: "Pixel Art #5",
    category: "art",
    tag: "pixel",
    imgSrc: "/thumbs/art/pixel-5.jpg",
    href: "/art/5",
  },
  {
    title: "Pixel Art #6",
    category: "art",
    tag: "pixel",
    imgSrc: "/thumbs/art/pixel-6.jpg",
    href: "/art/6",
  },
];

export default function MostLiked() {
  return (
    <>
      <Head>
        <title>Most Liked • Dubular</title>
      </Head>
      <main className="px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neon drop-shadow-glow mb-6">
          Most Liked
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Thumb key={i} {...it} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(){return{props:{}}}
