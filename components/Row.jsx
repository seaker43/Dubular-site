import Card from "./Card";
export default function Row({title, items, seeAllHref="#", variant="edge"}){
  return (
    <section className="container" style={{paddingTop:10,paddingBottom:18}}>
      <div className="hrow">
        <h2 className="h-title">{title}</h2>
        <a className="neon-link" href={seeAllHref}><span>See all</span> &gt;</a>
      </div>
      <div className="hscroll">
        {items.map((v,i)=>(<Card key={i} v={v} variant={variant}/>))}
      </div>
    </section>
  );
}
