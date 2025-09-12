import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
import Layout from "../components/Layout/Layout";

export default function MyApp({ Component, pageProps }) {
 return (
 <Layout>
 <Component {...pageProps} />
 </Layout>
 );
}
