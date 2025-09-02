<<<<<<< HEAD
// pages/_app.js
import "../styles/beta.css";
import "../styles/global.css";
import Header from "../components/Header";
=======
import '../styles/beta.css';
>>>>>>> e01c34ad (feat(ui): Leaderboards, Pools, Wallet + Edge API routes)

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
