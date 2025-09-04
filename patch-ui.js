const fs = require('fs');

function edit(file, fn){
  if(!fs.existsSync(file)) return console.log('skip (missing):', file);
  let s = fs.readFileSync(file,'utf8'); const before = s;
  s = fn(s);
  if(s!==before){ fs.writeFileSync(file,s); console.log('patched', file); }
  else console.log('no changes', file);
}

/* 1) Polish the wallet coin + home FAB + skeletons (CSS) */
edit('styles/home.css', s=>{
  if(!/\.token-coin\b/.test(s)){
    s += `
/* --- Dubular UI polish (coin + FAB + skeletons) --- */
.token-coin{
  position:relative; display:inline-flex; align-items:center; justify-content:center;
  width:34px; height:34px; border-radius:50%;
  background: radial-gradient(60% 60% at 50% 40%, #1ff9d6 0%, #0ad 45%, #083548 100%);
  box-shadow: inset 0 2px 6px rgba(255,255,255,.25),
              inset 0 -6px 14px rgba(0,0,0,.45),
              0 0 18px rgba(0,255,220,.28);
  border:1px solid rgba(0,255,220,.35);
}
.token-coin .mark{
  font-weight:800; letter-spacing:.02em; font-size:.9rem; color:#0b1321;
  text-shadow:0 1px 0 rgba(255,255,255,.35);
}
.fab-home{ 
  width:64px; height:64px; border-radius:9999px; backdrop-filter: blur(4px);
  background: radial-gradient(65% 65% at 50% 40%, rgba(0,255,230,.20), rgba(0,255,200,.06));
  border:1px solid rgba(0,255,230,.28);
  box-shadow: 0 8px 24px rgba(0,255,200,.18), inset 0 0 24px rgba(0,255,220,.10);
  transform: translateY(-14px);
}
.fab-home svg{ filter: drop-shadow(0 0 8px rgba(0,255,230,.55)); }
.fab-home:active{ transform: translateY(-12px) scale(.985); }
@keyframes homePulse{0%{box-shadow:0 0 0 0 rgba(0,255,230,.28)}70%{box-shadow:0 0 0 14px rgba(0,255,230,0)}100%{box-shadow:0 0 0 0 rgba(0,255,230,0)}}
.fab-home.pulse{ animation: homePulse 2.6s ease-out infinite; }

/* Featured banner */
.featured-wrap{ margin:8px 12px 6px; }
.featured-card{
  height:144px; border-radius:18px;
  background: radial-gradient(120% 100% at 40% 10%, #052029 0%, #071a1d 60%, #081316 100%);
  border:1px solid rgba(0,255,220,.10);
  box-shadow: inset 0 0 140px rgba(0,255,230,.06), 0 12px 28px rgba(0,0,0,.55);
  display:flex; align-items:center; justify-content:center; overflow:hidden;
}
.featured-card .logo{ transform: scale(.78); opacity:.95; }

/* Streaming skeletons */
.skel{ position:relative; overflow:hidden; border-radius:14px; background:#0b171b; }
.skel::after{ content:""; position:absolute; inset:0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent);
  transform: translateX(-100%); animation: shine 1.4s infinite;
}
@keyframes shine{ 100%{ transform: translateX(100%);} }
.skel-eq{ display:flex; gap:3px; padding:10px 12px; }
.skel-eq i{ width:5px; height:14px; background:linear-gradient(#0e2630,#0f3c45);
            animation: eq 1s infinite ease-in-out; border-radius:2px }
.skel-eq i:nth-child(2){ animation-delay:.12s } .skel-eq i:nth-child(3){ animation-delay:.24s }
@keyframes eq{ 0%,100%{ height:10px } 50%{ height:22px } }
.skel-live{ position:absolute; top:10px; left:10px; width:42px; height:20px; border-radius:10px;
  background: radial-gradient(80% 80% at 50% 50%, #1bffcf, #0acfb1);
  opacity:.25; animation: ping 1.6s infinite; }
@keyframes ping{ 0%{ transform:scale(.9); opacity:.30 } 70%{ transform:scale(1.25); opacity:.05 } 100%{ opacity:0 } }
`;
  }
  return s;
});

/* 2) Bottom bar: ensure Home FAB has pulse class; wrap wallet icon in a .token-coin if not yet */
['components/BottomBar.jsx','components/BottomBar.tsx','components/BottomBar.js'].forEach(f=>{
  if(!fs.existsSync(f)) return;
  edit(f, s=>{
    // Add pulse class to fab-home
    s = s.replace(/className="fab-home(?![^"]*pulse)/,'className="fab-home pulse');
    // Wrap the wallet (D) badge in a coin shell
    s = s.replace(/(<span[^>]*className="[^"]*?\bwallet\b[^"]*"[^>]*>)(.*?)(<\/span>)/s,
      (_,a,b,c)=> `${a}<span className="token-coin"><span className="mark">D</span></span>${c}`);
    return s;
  })
});

/* 3) Homepage: add Featured banner + new section headers if missing */
edit('pages/index.js', s=>{
  // lightweight Featured insertion right after <main ...>
  if(!/Featured Streams/.test(s)){
    s = s.replace(/(<main[^>]*>)/, `$1
      <div className="featured-wrap">
        <div className="featured-card">
          <div className="logo"><img src="/logo-hero.svg" alt="Dubular"/></div>
        </div>
      </div>
    `);
  }
  // extra sections (headers only — link titles go to pages if they exist)
  const addSection = (title, href) => {
    if(new RegExp(title.replace(/\s+/g,'\\s+')).test(s)) return;
    s = s.replace(/(<h2[^>]*className="[^"]*section-title[^"]*"[^>]*>Trending Now<\/h2>)/,
      `$1\n<h2 className="section-title"><a href="${href}">${title}</a></h2>\n<div className="carousel skel" style="height:140px; position:relative"><div class="skel-live"></div><div class="skel-eq">${'<i></i>'.repeat(12)}</div></div>`);
  };
  addSection('Most Watched','/most-watched');
  addSection('Most Liked','/most-liked');
  addSection('Biggest Grinders','/grinders');
  return s;
});
