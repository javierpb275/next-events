import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
import Notification from "../components/ui/notification";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Notification title="Test" message="This is a test." status="error" />
    </Layout>
  );
}

export default MyApp;
