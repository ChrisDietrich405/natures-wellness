import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { api } from "../../../pages/api/api";

const TextSlideCard = ({ listItem }) => {
  const [testimonials, setTestimonials] = useState([]);

  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     const response = await api.get(`/testimonials`);
  //     const { data } = response;
  //     console.log(data);
  //     setTestimonials(data);
  //   };
  //   fetchTestimonials();
  // }, []);

  return (
    <div className={styles.slide_container}>
      {/* {testimonials.map((test, index) => {
        return <p key={index}>{test.name}</p>;
      })} */}

      <p style={{marginBottom: "20px"}}>{listItem.testimonial}</p>
      <p className={styles.name}>{listItem.name}</p>
      <p style={{fontWeight: "bold"}}>{listItem.city}</p>
    </div>
  );
};

export default TextSlideCard;
