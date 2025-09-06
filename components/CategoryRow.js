import {useRef,useEffect} from "react";
export default function CategoryRow({title,items=[]}) {
  const railRef=useRef(null);
  useEffect(()=>{ const el=railRef.current; if(!el) return;
    const onWheel=e=>{ if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){ el.scrollLeft+=e.deltaY; e.preventDefault(); }};
    el.addEventListener("wheel",onWheel,{passive:false}); return ()=>el.removeEventListener("wheel",onWheel);
  },[]);
  return (
    <section className="row">
      <h2 className="drop-shadow-neon section-title">{title}</h2>
      <div ref={railRef} className="rail">
        {items.map((it,idx)=>(
          <a key={idx} href="#" className="card">
            <div className="relative">
              {it.live ? <span className="badge">LIVE</span> : null}
              <img src={it.thumb} alt="" className="thumb" />
            </div>
            <div className="meta">
              <div className="name">{it.title}</div>
              <div className="tags">{(it.tags||[]).join(" • ")}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
