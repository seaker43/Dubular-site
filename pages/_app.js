// pages/_app.js
import "../styles/beta.css";
import "../styles/global.css";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
