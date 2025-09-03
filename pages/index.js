import Row from "../components/Row";
import BottomBar from "../components/BottomBar";

const hero = [
  { title:"Night Raid Tactics #1", img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop", live:true },
  { title:"DJ Krillz Party",       img:"https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=1600&auto=format&fit=crop", live:false },
];
const watched = [
  { title:"Retro Arcade Vibes",    img:"https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1600&auto=format&fit=crop", live:false },
  { title:"Lo-Fi Study Session",   img:"https://images.unsplash.com/photo-1529336953121-a0f91f1fd2ff?q=80&w=1600&auto=format&fit=crop", live:false },
];
const trending = [
  { title:"Street Battle 9",       img:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop", live:true },
  { title:"Dubular Presents",      img:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop", live:false },
];
const music = [
  { title:"Synthwave Jam",         img:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop", live:true },
  { title:"Vocal Booth",           img:"https://images.unsplash.com/photo-1504805572947-34fad45wed00?q=80&w=1600&auto=format&fit=crop", live:false },
];
const irl = [
  { title:"Travel IRL",            img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop", live:false },
  { title:"Night Market Walk",     img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop", live:false },
];
const gaming = [
  { title:"Battle Royale Grind",   img:"https://images.unsplash.com/photo-1511517006433-8d1f06f7f5d2?q=80&w=1600&auto=format&fit=crop", live:true },
  { title:"Speedrun Night",        img:"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop", live:false },
];

export default function Home(){
  return (
    <main style={{paddingBottom:80}}>
      <Row title="Featured Streamers" items={hero} seeAllHref="/featured" />
      <Row title="Previously Watched" items={watched} seeAllHref="/history" />
      <Row title="Trending" items={trending} seeAllHref="/trending" variant="flame" />
      <Row title="Recommended" items={[...hero,...watched]} seeAllHref="/recommended" />
      <Row title="Music" items={music} seeAllHref="/music" />
      <Row title="IRL" items={irl} seeAllHref="/irl" />
      <Row title="Gaming" items={gaming} seeAllHref="/gaming" />
      <BottomBar/>
    </main>
  );
}
