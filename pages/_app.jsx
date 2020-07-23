import "video-react/dist/video-react.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/index.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Feliz Cumple !!!</title>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
