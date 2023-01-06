import React from "react";

import Banner from "../src/components/Banner"
import ContentSlider from "../src/components/ContentSlider";

import {blogsList} from "./slideData"

const bannerPicture = "/images/tofu.png"

function Blogs() {
  return (
    <>
      <Banner picturePath={bannerPicture} />
        <div className="inner-container">
          <ContentSlider numOfSlides={4} slideContent={blogsList} />
        </div>
    </>
  );
}

export default Blogs;
