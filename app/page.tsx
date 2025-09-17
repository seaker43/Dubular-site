export const metadata = { title: 'Dubular' };

export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#000',color:'#0ff',padding:'3rem 1.25rem'}}> 
      <h1 style={{fontSize:'clamp(2rem,6vw,3.25rem)',fontWeight:800,letterSpacing:1}}>Dubular — Home</h1>
      <p style={{marginTop:12,opacity:.85}}>App Router live on Cloudflare. Try the API: <a href="/api/time" style={{color:'#0ff',textDecoration:'underline'}}>GET /api/time</a></p>
    </main>
  );
}
