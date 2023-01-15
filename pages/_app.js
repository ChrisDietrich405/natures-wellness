import "../src/styles/globals.css"
import Layout from "../src/components/Layout";
//emailjs username chrisdietrichdumbemail@gmail.com
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
