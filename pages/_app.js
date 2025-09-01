// pages/_app.js
import '../styles/beta.css';
import '../styles/globals.css'; // only if file exists

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
