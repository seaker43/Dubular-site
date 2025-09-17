export const dynamic ="force-dynamic";
import"../styles/globals.css";
import"../styles/theme-overrides.css";

export default function MyApp({ Component, pageProps }) {
 return (<div className="page-root"><Component {...pageProps} /></div>);
}
