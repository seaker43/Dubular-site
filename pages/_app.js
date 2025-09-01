// pages/_app.js
import '../styles/beta.css';
// If you don’t have globals.css, you can remove this line
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
