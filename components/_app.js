import "@/styles/globals.css";
import Layout from "./layout";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
  <SessionProvider session={pageProps.session}>
    <Layout>
      return <Component {...pageProps} />;
    </Layout>
  </SessionProvider>
}
