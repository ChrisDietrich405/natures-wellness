import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import ContentSlider from "../../src/components/ContentSlider";
import Slideshow from "../../src/components/Slideshow";

import styles from "../../src/styles/Testimonials.module.css"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await api.get(`/testimonials`);
      const { data } = response;
      console.log("ASD: ", data);
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <>
      <Slideshow title="Testimonials" />
      <Container className={styles.testimonials_wrapper}> 
        <ContentSlider
          typeOfSlide="text"
          childrenImageHeight="large"
          numOfSlides={1}
          slideContent={testimonials}
        />
      </Container>
    </>
  );
};

export default Testimonials;
