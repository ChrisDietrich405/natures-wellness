// import Header from "./Header";
import Header2 from "./Header2";

import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header2 />
      <main>{children}</main>
      <Footer style={{ position: "fixed", bottom: "0px" }} />
    </>
  );
}
