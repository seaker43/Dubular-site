// pages/_app.js
import '../styles/beta.css'; // ✅ global CSS goes here
import '../styles/globals.css'; // (if you have one)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}import '../styles/beta.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
