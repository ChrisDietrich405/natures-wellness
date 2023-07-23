import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { api } from "../../../pages/api/api";

const TextSlideCard = ({ listItem }) => {
  return (
    <div className={styles.slide_container}>
      <p style={{ marginBottom: "20px" }}>{listItem.testimonial}</p>
      <p className={styles.name}>{listItem.name}</p>
      <p style={{ fontWeight: "bold" }}>{listItem.city}</p>
    </div>
  );
};

export default TextSlideCard;
