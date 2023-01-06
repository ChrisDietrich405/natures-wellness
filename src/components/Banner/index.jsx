import React from "react";
import styles from "./styles.module.css";

const Banner = ({ picturePath }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${picturePath})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Banner;
