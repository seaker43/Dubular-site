"use client";

import Image from "next/image";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const DEMO = [
  {
    id: "1",
    title: "Streamer One",
    thumb:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
  },
  {
    id: "2",
    title: "Streamer Two",
    thumb:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
  },
  {
    id: "3",
    title: "Streamer Three",
    thumb:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
  },
  {
    id: "4",
    title: "Streamer Four",
    thumb:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
  },
];

export default function FavoritesPage() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/sign-in" afterSignInUrl="/favorites" />
      </SignedOut>

      <SignedIn>
        <main className="page px-4 py-6">
          <h1 className="text-4xl font-extrabold text-cyan-400 text-center mb-6">
            Your Favorites
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {DEMO.map((item) => (
              <article
                key={item.id}
                className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 ring-1 ring-neutral-800 shadow-lg hover:shadow-2xl transition-all duration-200"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-dubular-green/60 blur-[1.5px] opacity-30" />
                <Image
                  src={item.thumb}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 50vw, (max-width:1024px) 25vw, 20vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0">
                  <div className="mx-2 mb-2 rounded-md bg-black/75 backdrop-blur p-2 ring-1 ring-white/10">
                    <p className="text-sm font-semibold text-cyan-300 truncate">
                      {item.title}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </SignedIn>
    </>
  );
}
