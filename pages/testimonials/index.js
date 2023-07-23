import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import ContentSlider from "../../src/components/ContentSlider";

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
    <div style={{ marginTop: "30px" }}>
      <h1 style={{textAlign: "center", marginBottom: "20px"}}>Testimonials</h1>
      <ContentSlider
        typeOfSlide="text"
        childrenImageHeight="large"
        numOfSlides={1}
        slideContent={testimonials}      
      />
    </div>
  );
};

export default Testimonials;
