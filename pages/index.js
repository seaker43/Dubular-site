// pages/index.js
import Head from 'next/head';
import styles from '../styles/beta.css'; // make sure beta.css exists

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubular Beta</title>
      </Head>
      <main className="container">
        <header>
          <h1>Dubular</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">Browse</a>
            <a href="#">Library</a>
            <a href="#">Profile</a>
          </nav>
        </header>

        <section className="hero">
          <h2>Stream. Watch. Connect.</h2>
          <p>Welcome to the beta release of Dubular streaming.</p>
          <button>Start Watching</button>
        </section>

        <section className="grid">
          <div className="card">Movie 1</div>
          <div className="card">Movie 2</div>
          <div className="card">Movie 3</div>
          <div className="card">Movie 4</div>
        </section>
      </main>
    </>
  );
}
