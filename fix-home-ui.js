const fs = require("fs");
const f = "pages/index.js";
let s = fs.readFileSync(f, "utf8");

// --- 1) remove duplicate logo hero cards ---
s = s.replace(/<div[^>]*>\s*<DubularLogo[\s\S]*?<\/div>/g, "");

// --- 2) ensure header only renders once ---
s = s.replace(
  /<header[\s\S]*?<\/header>/,
  `
<header style={{display:"flex",justifyContent:"center",padding:"10px 0"}}>
  <DubularLogo />
</header>`
);

// --- 3) inject Featured Streamers carousel ---
if (!/Featured Streamers/.test(s)) {
  s = s.replace(
    /<main[^>]*>/,
    (m) =>
      m +
      `
    <section style={{padding:"12px"}}>
      <h2 style={{color:"#18e27a",margin:"0 0 10px"}}>Featured Streamers</h2>
      <div style={{display:"flex",gap:12,overflowX:"auto",paddingBottom:6}}>
        {[{
          id:"f1", title:"AI Coding Jam", tags:["coding","synthwave"], img:"https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        },{
          id:"f2", title:"Lo-Fi Study Session", tags:["lofi","chill"], img:"https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
        }].map(v=>(
          <div key={v.id} style={{
            minWidth:"220px",background:"radial-gradient(65% 65% at 50% 40%, rgba(0,255,220,.06), rgba(0,20,30,.92))",
            border:"1px solid rgba(0,255,220,.15)",borderRadius:14,padding:10
          }}>
            <div style={{position:"relative",borderRadius:10,overflow:"hidden"}}>
              <img src={v.img} alt={v.title} style={{width:"100%",height:120,objectFit:"cover"}}/>
              <span style={{
                position:"absolute",top:6,left:6,
                fontSize:11,fontWeight:800,color:"#001318",
                background:"linear-gradient(90deg,#34d399,#18e27a)",
                padding:"2px 6px",borderRadius:999
              }}>LIVE</span>
            </div>
            <h3 style={{margin:"8px 0 2px",fontSize:15,color:"#d9fffb"}}>{v.title}</h3>
            <div style={{fontSize:12,color:"#9fe9e0"}}>{v.tags.join(" • ")}</div>
          </div>
        ))}
      </div>
    </section>
  `
  );
}

// --- save ---
fs.writeFileSync(f, s);
console.log("✔ Patched homepage UI");
