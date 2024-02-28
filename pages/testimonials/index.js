import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios"
import ContentSlider from "../../src/components/ContentSlider";
import Slideshow from "../../src/components/Slideshow";

import styles from "../../src/styles/Testimonials.module.css"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await axios.get(
        `https://z1ek6m2k90.execute-api.us-east-1.amazonaws.com/dev/testimonials`,
        {
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
      console.log(response)
      const { body } = response.data;
     
      setTestimonials(body);
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
