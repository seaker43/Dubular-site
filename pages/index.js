import Head from "next/head";
import HorizontalCarousel from "../components/HorizontalCarousel";
import "../styles/home.css";
const thumbs = (n) => `/thumbs/${n}.jpg`;
const featured=[{id:"f1",title:"AI Coding Jam",category:"coding",tagline:"synthwave",thumb:thumbs("1"),live:true},{id:"f2",title:"Lo-Fi Chill",category:"music",tagline:"lofi",thumb:thumbs("2"),live:true},{id:"f3",title:"Speedrun Vault",category:"gaming",tagline:"any%",thumb:thumbs("3"),live:false}];
const trending=[{id:"t1",title:"Pixel Painter",category:"art",tagline:"retro",thumb:thumbs("4"),live:true},{id:"t2",title:"Crypto Charts",category:"finance",tagline:"alpha",thumb:thumbs("5"),live:false},{id:"t3",title:"Night Jazz",category:"music",tagline:"smooth",thumb:thumbs("6"),live:true}];
const mostWatched=[{id:"w1",title:"Top Plays",category:"gaming",tagline:"clips",thumb:thumbs("7"),live:false},{id:"w2",title:"Studio 808",category:"music",tagline:"house",thumb:thumbs("8"),live:true},{id:"w3",title:"Daily Dev",category:"coding",tagline:"tips",thumb:thumbs("9"),live:false}];
const mostLiked=[{id:"l1",title:"CineTalks",category:"film",tagline:"reviews",thumb:thumbs("10"),live:false},{id:"l2",title:"ChefCam",category:"food",tagline:"quick bites",thumb:thumbs("11"),live:false},{id:"l3",title:"Road Trip",category:"IRL",tagline:"coast2coast",thumb:thumbs("12"),live:true}];
const biggestGrinders=[{id:"g1",title:"StreamerA",category:"variety",tagline:"95h/week",thumb:thumbs("13"),live:true},{id:"g2",title:"StreamerB",category:"coding",tagline:"88h/week",thumb:thumbs("14"),live:true},{id:"g3",title:"StreamerC",category:"music",tagline:"84h/week",thumb:thumbs("15"),live:false}];
export default function Home(){return(<>
<Head><title>Dubular</title><meta name="description" content="Ride the Stream"/></Head>
<main className="page">
<header className="hero"><img src="/Dubular.jpg" alt="Dubular Logo" className="hero-logo"/></header>
<HorizontalCarousel title="Featured Streamers" items={featured}/>
<HorizontalCarousel title="Trending Now" items={trending}/>
<HorizontalCarousel title="Most Watched" items={mostWatched}/>
<HorizontalCarousel title="Most Liked" items={mostLiked}/>
<HorizontalCarousel title="Biggest Grinders" items={biggestGrinders}/>
</main></>);}
