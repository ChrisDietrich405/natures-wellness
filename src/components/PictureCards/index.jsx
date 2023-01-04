import Image  from "next/image"

// const publicURL = import.meta.env.VITE_PUBLIC_URL;
import styles from "./styles.module.css";


const PictureCards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid_container}>
          <div className={styles.grid}>
            <Image
            width={111}
            height={111}
              className={styles.grid_pic}
              src={"/images/tofu.png"}
              alt="grid-pic"
            ></Image>
          </div>
          <div className={styles.grid}>
            <Image
            width={111}
            height={111}
              className={styles.grid_pic}
              src={"/images/chickpeas.jpg"}
              alt="grid-pic"
            ></Image>
          </div>
          <div className={styles.grid}>
            <Image
            width={111}
            height={111}
              className={styles.grid_pic}
              src={"/images/tofu.png"}
              alt="grid-pic"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureCards;
