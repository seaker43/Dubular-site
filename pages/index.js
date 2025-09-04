import Head from "next/head";
import FeaturedCarousel from "../components/FeaturedCarousel";
import DubularLogo from "../components/DubularLogo";

export default function Home(){
  return (
    <>
      <Head>
        <title>Dubular • Ride the Stream</title>
        <meta name="theme-color" content="#0a1d22" />
      </Head>

      {/* Optional hero card under header */}
      <div style={{padding:"10px 14px 0"}}>
        <div style={{
          borderRadius:24, padding:"24px 20px",
          background:"radial-gradient(60% 60% at 50% 50%, rgba(0,255,220,.06), rgba(0,22,25,.95))",
          border:"1px solid rgba(0,255,220,.12)",
          boxShadow:"inset 0 0 60px rgba(0,255,220,.08), 0 10px 40px rgba(0,0,0,.45)",
          display:"flex", justifyContent:"center"
        }}>
          <div style={{transform:"scale(.88)"}}><DubularLogo size={64}/></div>
        </div>
      </div>

      <FeaturedCarousel />

      {/* Trending etc. Existing sections will continue below */}
      <section style={{padding:"8px 14px 100px"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,margin:"8px 6px 12px"}}>
          <h2 style={{margin:0, fontSize:22, color:"#7fffea"}}>Trending Now</h2>
          <div style={{flex:1, height:2, background:"linear-gradient(90deg, rgba(0,255,220,.3), rgba(0,200,255,0))"}}/>
        </div>
        {/* Your existing Trending grid/cards render here (placeholder container) */}
        <div style={{height:160, borderRadius:18, background:"rgba(0,25,32,.6)", border:"1px solid rgba(0,255,220,.08)"}} />
      </section>
    </>
  );
}
