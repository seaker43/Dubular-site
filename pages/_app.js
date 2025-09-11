import "../styles/header.css";
import "../styles/layout.css";
import "@/styles/globals.css";
import "../styles/theme-overrides.css";
// pages/_app.js
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
