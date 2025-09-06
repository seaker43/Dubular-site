import "../styles/globals.css";
import BottomBar from "../components/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
