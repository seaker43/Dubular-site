import "../styles/util.css";
import "../styles/theme.css";
import "../styles/layout.css";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

export default function MyApp({ Component, pageProps }) {
 return (
 <Layout>
 <Component {...pageProps} />
 </Layout>
 );
}
