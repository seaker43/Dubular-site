import "../styles/globals.css";
import BodyPad from "../components/BodyPad";
import BottomBar from "../components/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <BodyPad>
      <Component {...pageProps} />
      <BottomBar />
    </BodyPad>
  );
}
