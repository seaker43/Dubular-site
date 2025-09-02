import Link from "next/link";
export default function Logo(){
  return (
    <Link href="/" style={{display:"inline-flex",alignItems:"center",gap:"8px"}}>
      <span style={{
        fontWeight:800, letterSpacing:"0.5px",
        textShadow:"0 0 16px rgba(0,230,255,.55), 0 0 4px rgba(0,230,255,.6)"
      }}>
        <span style={{color:"#00e6ff"}}>dub</span><span style={{opacity:.95}}>U</span><span style={{color:"#00e6ff"}}>lar</span>
      </span>
    </Link>
  );
}
