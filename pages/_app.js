import "../styles/global.css";
import BottomBar from "../components/home/BottomBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}
