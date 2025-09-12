import BaseApp from "next/app"
// pages/_app.js
import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Disables Automatic Static Optimization (forces SSR for all pages)
MyBaseApp.getInitialProps = async (appContext) => {
  const appProps = await BaseApp.getInitialProps(appContext);
  return { ...appProps };
};
