import "video-react/dist/video-react.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/index.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/shared/layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Feliz Cumple !!!</title>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
