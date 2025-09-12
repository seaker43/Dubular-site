import BaseApp from "next/app";
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

MyApp.getInitialProps = async (appContext) => {
  const appProps = await BaseApp.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;

