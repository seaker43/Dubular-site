const fs = require('fs');

function edit(file, fn){
  if(!fs.existsSync(file)) return;
  let s = fs.readFileSync(file,'utf8'); const out = fn(s);
  if(out!==s){ fs.writeFileSync(file,out); console.log('patched', file); }
}

/* 1. Fix Featured banner: use inline DubularLogo instead of missing img */
edit('pages/index.js', s=>{
  return s.replace(/<div className="logo">[\s\S]*?<\/div>/,
    `<div className="logo"><DubularLogo /></div>`);
});

/* 2. Ensure Wallet icon wrapped in token-coin */
['components/BottomBar.jsx','components/BottomBar.js','components/BottomBar.tsx'].forEach(f=>{
  if(fs.existsSync(f)){
    edit(f, s=>{
      if(!/token-coin/.test(s)){
        s = s.replace(/(<span[^>]*>\s*D\s*<\/span>)/,
          `<span className="token-coin"><span className="mark">D</span></span>`);
      }
      return s;
    });
  }
});
