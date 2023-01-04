import Image from "next/image"

import styles from "./styles.module.css";

// const publicURL = import.meta.env.VITE_PUBLIC_URL;

const Cards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid_container}>
          <div className={styles.grid}>
            <Image
              width={111}
              height={111}
              className={styles.grid_pic}
              src={"/images/chickpeas.jpg"}
              alt="grid-pic"
            ></Image>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <Image
              width={111}
              height={111}            


              className={styles.grid_pic}
              src={"/images/tofu.png"}
              alt="grid-pic"
            ></Image>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <Image
            width={111}
            height={111}
              className={styles.grid_pic}
              src={"/images/chickpeas.jpg"}
              alt="grid-pic"
            ></Image>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <Image
            width={111}
            height={111}
              className={styles.grid_pic}
              src={"/images/tofu.png"}
              alt="grid-pic"
            ></Image>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
