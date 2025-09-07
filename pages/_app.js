// pages/_app.js
import "../styles/globals.css";
import "../styles/theme-overrides.css"; // neon/glow extras

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
