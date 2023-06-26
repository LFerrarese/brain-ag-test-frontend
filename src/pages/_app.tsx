import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "~/styles/global";
import { Loader } from "~/components/molecules/Loader";
import { AppProvider } from "~/providers/AppProvider";
import { Layout } from "~/components/organisms/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const isAuthenticationRoute = (): boolean => {
    if (pathname.includes("/auth")) return true;
    return false;
  };

  return (
    <AppProvider>
      <Loader />
      {!isAuthenticationRoute() ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
      <GlobalStyle />
      <Toaster />
    </AppProvider>
  );
}
