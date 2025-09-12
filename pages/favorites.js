import React from "react";
// pages/favorites.js
import Head from "next/head";
import Thumb from "../components/Thumb";

const MOCK = [
  {
    id: "f1",
    title: "Fav One",
    src: "/thumbnails/favs/1.jpg",
    creator: { name: "Alice", slug: "alice", logoUrl: "/creators/alice.png" },
  },
  {
    id: "f2",
    title: "Fav Two",
    src: "/thumbnails/favs/2.jpg",
    creator: { name: "Bob", slug: "bob", logoUrl: "/creators/bob.png" },
  },
  {
    id: "f3",
    title: "Fav Three",
    src: "/thumbnails/favs/3.jpg",
    creator: { name: "Zed", slug: "zed", logoUrl: "/creators/zed.png" },
  },
];

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Favorites • dubUlar</title>
      </Head>
      <section className="px-4 mt-4">
        <h2 className="text-2xl font-bold mb-3">Favorites</h2>
        <ul className="flex gap-3 overflow-x-auto py-2 scroll-snap-x">
          {MOCK.map((it) => (
            <li key={it.id} className="snap-start">
              <Thumb
                title={it.title}
                image={it.src}
                href={`/watch/${it.id}`}
                square
                creator={it.creator}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getServerSideProps(){return{props:{}}}

export const config = { runtime: 'experimental-edge' };
