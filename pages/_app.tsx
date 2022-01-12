import { AppProps } from "next/app";
import { Component } from "react";
import Layout from "../components/Layout";

interface IApp {
  Component: any;
  pageProps: any;
}

const App: React.FC<IApp> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
