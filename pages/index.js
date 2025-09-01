// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular Beta</title>
      </Head>
      <main className="container">
        <header className="header">
          <div className="logo">Dubular</div>
          <nav>
            <a href="#">Home</a>
            <a href="#">Browse</a>
            <a href="#">Library</a>
            <a href="#">Profile</a>
          </nav>
        </header>

        <section className="hero">
          <h1>Stream. Watch. Connect.</h1>
          <p>Welcome to the Dubular Beta — your next-gen streaming hub.</p>
          <button>Start Watching</button>
        </section>

        <section className="grid">
          <div className="card">
            <Image src="/poster1.jpg" alt="Movie 1" width={200} height={300} />
            <p>Movie 1</p>
          </div>
          <div className="card">
            <Image src="/poster2.jpg" alt="Movie 2" width={200} height={300} />
            <p>Movie 2</p>
          </div>
          <div className="card">
            <Image src="/poster3.jpg" alt="Movie 3" width={200} height={300} />
            <p>Movie 3</p>
          </div>
          <div className="card">
            <Image src="/poster4.jpg" alt="Movie 4" width={200} height={300} />
            <p>Movie 4</p>
          </div>
        </section>
      </main>
    </>
  );
}
