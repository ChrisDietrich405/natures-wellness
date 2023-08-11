import Header from "./Header";
import Footer2 from "./Footer2";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer2 style={{ position: "fixed", bottom: "0px" }} />
    </>
  );
}
