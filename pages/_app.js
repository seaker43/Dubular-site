import '../styles/globals.css';
import "../styles/globals.css";
import BottomBar from "../components/BottomBar";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black text-green-100 pb-[92px]">
      <main className="mx-auto w-full max-w-screen-sm px-2 pt-4">
        <Component {...pageProps} />
      </main>
      <BottomBar />
    </div>
  );
}
