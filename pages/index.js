export default function Home(){
  return (
    <main className="hero">
      <img className="logo" src="/dubular-logo.svg" alt="DUBULAR logo"/>
      <p className="tag">RIDE THE STREAM</p>
      <form className="signup" onSubmit={e=>e.preventDefault()}>
        <input className="email" type="email" placeholder="Email address" aria-label="Email address"/>
        <button className="cta">Sign Up</button>
      </form>
      <div className="social">
        <a href="#">𝕏</a>
        <a href="#">◎</a>
        <a href="#">▶</a>
      </div>
    </main>
  )
}
