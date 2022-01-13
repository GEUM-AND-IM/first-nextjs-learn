import { QueryClient, QueryClientProvider } from "react-query";

interface IApp {
  Component: any;
  pageProps: any;
}

const queryClient = new QueryClient();

const QueryProviderContainer: React.FC<IApp> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default QueryProviderContainer;
