export const config = { runtime: "experimental-edge" };

export default function NotFound() {
  return (
    <div style={{
      minHeight:"calc(100vh - 88px)",display:"grid",placeItems:"center",
      background:"black",color:"white",padding:"24px",textAlign:"center"
    }}>
      <div>
        <h1 style={{fontSize:"28px",marginBottom:"12px"}}>404 — Not Found</h1>
        <p style={{opacity:.75}}>The page you’re looking for doesn’t exist.</p>
      </div>
    </div>
  );
}
