import React from "react";
import Slider from "react-slick";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import Card from "../Card";
import TextSlideCard from "../TextSlideCard";

import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentSlider = ({ childrenImageHeight, numOfSlides, slideContent, typeOfSlide }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={styles.next_button} onClick={onClick}>
        <BsFillArrowRightCircleFill className={styles.next_arrow} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={styles.prev_button} onClick={onClick}>
        <BsFillArrowLeftCircleFill className={styles.prev_arrow} />
      </button>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numOfSlides || 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
 

  return (
    <Slider {...settings} className={styles.slider_container}>
      {slideContent.map((listItem) => {
        if(typeOfSlide === "text") {
          return (
            <TextSlideCard listItem={listItem}/>
          )
        } 
        return (
          <Card
            // innerImage={innerImage}
            imageHeight={childrenImageHeight}
            listItem={listItem}
            // title={listItem.title}
            // image={listItem.img}
            // category={listItem.category}
          />
        );
      })}
    </Slider>
  );
};

export default ContentSlider;
