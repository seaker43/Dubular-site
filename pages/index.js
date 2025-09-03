import React from "react";
import CategoryRow from "../components/home/CategoryRow";

export const config = { runtime: "experimental-edge" };

export default function Home(){
  return (
    <>
      <CategoryRow title="Trending Now" />
      <CategoryRow title="Esports" />
      <CategoryRow title="Mobile Streams" />
    </>
  );
}
