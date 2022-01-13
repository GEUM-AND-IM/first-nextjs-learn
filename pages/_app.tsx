import Layout from "../components/Layout";
import QueryProviderContainer from "../components/QueryProviderContainer";
import "./reset.css";

interface IApp {
  Component: any;
  pageProps: any;
}

const App: React.FC<IApp> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <QueryProviderContainer Component={Component} pageProps={pageProps} />
    </Layout>
  );
};

export default App;
