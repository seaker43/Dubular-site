// pages/_app.js
import "../styles/globals.css";
import "../styles/theme-overrides.css"; // neon/glow overrides

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
