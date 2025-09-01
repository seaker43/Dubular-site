// pages/_app.js
import '../styles/beta.css';        // your global styles
// import '../styles/globals.css';  // (optional) only if you actually have this file

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
