import { useState } from "react";
import Image from "next/image";
import Slideshow from "../src/components/Slideshow";
import Cards from "../src/components/Cards";
import PictureCards from "../src/components/PictureCards";
import styles from "../src/styles/Home.module.css";
import { homeData } from "../src/data/homeData";
import List from "../src/components/List";

const EmPicture = "/images/home-profile.jpg";

export default function Home() {
  return (
    <>
      <Slideshow />
      <section id="some" className={`${styles.container} inner-container`}>
        {/* <h3 className={styles.home_intro}>
          Hello, I'm Emily and I help men and women lose weight and prevent or
          reverse chronic diseases in a sustainable and enjoyable manner by
          teaching the power of cultivating healthy habits related to eating
          more plants and embracing healthy lifestyle practices.
        </h3> */}
        <div>
          <h1 style={{ fontSize: "50px", fontWeight: "bold", margin: "40px 0" }}>Are you:</h1>

          <List data={homeData} unordered className={styles.unordered_list} />
        </div>
        <div>
          If you answered yes to any of these questions, you are not alone.
          Having worked with hundreds of men and women trying to lose weight and
          improve their health, I have witnessed the immense frustration and
          despair faced by those who, just like you, often have tried many
          different ways to lose weight and improve their health but have yet to
          find a way that is sustainable, inexpensive, and enjoyable. This is
          not a personal failure but rather one of our society-our diet culture,
          food industry, ease of access to inexpensive and processed foods, and
          the abundance of conflicting nutrition and health information do not
          make it easy.
        </div>
        <div style={{ marginTop: "20px" }}>
          I am here to help you to navigate the challenges that society has
          thrown on you by working with you to create and cultivate habits that
          can transform your health and happiness. I am here so that your dreams
          of losing weight and keeping it off, of having your clothes fit more
          loosely, for jumping out of bed in the morning with little or no
          stiffness, for abundant energy, reducing or eliminating your need for
          some or all medications, and more will become realities long-term.
        </div>
        <div className={styles.freeGuide}>
          Looking to lose weight & improve your health without sacrificing
          taste, feeling hungry, cutting portion sizes, or counting calories?
          Grab this free Sensational Six Guide to help you slim down while
          feeling satisfied and energized! Complete with servings to aim for,
          ideas on how to boost your intake of plant powerhouses, and links to
          some delicious recipes!
        </div>
        <div className={styles.freeGuideContainer}>
          <a
            href="https://drive.google.com/file/d/1aLAgxayEAow11BpVgFSO_LKzoDXxdZ82/view?usp=sharing"
            className={styles.freeGuideLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Get a Free Guide Today!
          </a>
        </div>
        {/* <Cards /> */}
        {/* <PictureCards /> */}
      </section>
    </>
  );
}
