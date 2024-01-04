import Header from "./Header";
import Footer from "./Footer";
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main__wrapper}>{children}</main>
      <Footer style={{ position: "fixed", bottom: "0px" }} />
    </>
  );
}
