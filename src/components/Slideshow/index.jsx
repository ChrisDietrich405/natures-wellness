import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./styles.module.css";

const slideshow1 = "/images/tofu.png";
const slideshow2 = "/images/chickpeas.jpg";

export default function Slideshow() {
  const imageArray = [slideshow1, slideshow2];

  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        // clearInterval(interval);
        return;
      }
      if (index === imageArray.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index, pause]);

  return (
    <div className={styles.slideshow_container}>
      <div className={styles.slideshow}>
        {imageArray.map((image, i) => (
          <Image
            width={333}
            height={333}
            alt="slideshow"
            className={`${styles.slideshow_image} ${index === i ? styles.active : styles.inactive}`}
            // className={`${index === i ? "active" : "inactive"} ${
            //   styles.slideshow_image
            // }`}
            src={image}
            key={i}
          ></Image>
        ))}
      </div>
    </div>
  );
}
