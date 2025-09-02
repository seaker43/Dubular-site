nano components/home/CategoryRow.js   # remove any BottomBar import/render if present
git add -A
git commit -m "fix: only render BottomBar once at page bottom"
git push origin ui/polish-netfliximport React from "react";
import CategoryRow from "../components/home/CategoryRow";
import BottomBar from "../components/home/BottomBar";

export const config = { runtime: "experimental-edge" }; // Cloudflare Pages friendly

export default function Home(){
  return (
    <>
      <CategoryRow title="Trending Now" />
      <CategoryRow title="Esports" />
      <CategoryRow title="Mobile Streams" />
      <BottomBar />
    </>
  );
}
