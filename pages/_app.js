// pages/_app.js
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <Component {...pageProps} />
    </main>
  );
}
