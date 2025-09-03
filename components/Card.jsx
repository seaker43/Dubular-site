export default function Card({v, variant="edge"}){
  return (
    <article className={"card "+(variant==="flame"?"flame":"edge")} style={{scrollSnapAlign:"start"}}>
      {v.live && <span className="badge">LIVE</span>}
      <img src={v.img} alt={v.title}/>
      <div className="meta">
        <h3 style={{margin:0,fontSize:18,color:"var(--cyan)"}}>{v.title}</h3>
      </div>
    </article>
  );
}
