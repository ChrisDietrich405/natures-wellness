import { useState } from "react";
import Image from "next/image"
import Slideshow from "../src/components/Slideshow"
import Cards from "../src/components/Cards";
import PictureCards from "../src/components/PictureCards";
import styles from "../src/styles/Home.module.css"
import { homeData, homeData2 } from "../src/data/homeData";
import List from "../src/components/List";

const EmPicture = "/images/home-profile.jpg";

export default function Home() {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <Slideshow />
      <section id="some" className={`${styles.container} inner-container`}>
        <div className={styles.intro}>
          <Image src={EmPicture} width={111} height={111} alt="Em photo" className={styles.photo} >
            </Image>
          <div className={styles.intro_text}>
            <h1 className="page_title">"Hi, I'm Em!"</h1>
            <p>
              I have an immense passion for helping guide others toward a more
              healthful and vibrant life. This passion has led me to pursue a
              career as a Registered Dietitian, to obtain a Master's Degree in
              Nutrition, and to learn as much as I can about balanced nutrition
              and healthy lifestyle practices.{" "}
            </p>
            <p>
              These healthy lifestyle practices I abbreviate as SPARC since they
              are sure to add spark to your life. They are as follows:
            </p>
            {/* <a
              href="#some"
              onClick={(e) => {
                e.preventDefault();
                setReadMore((prevState) => !prevState);
              }}
            >
              {readMore ? "Show less" : "Read more"}
            </a> */}

            {/* {readMore && ( */}
            <>
              <List data={homeData} ordered className={styles.ordered_list}/>
            </>
            {/* )} */}
          </div>
        </div>
        <section className={styles.biography_section}>
          <p>
            Early in my career as a Dietitian at several nursing homes in
            Baltimore City, I witnessed what seemed like immense suffering and
            reduced quality of life in men and women, some as young as myself at
            the time (late 20s) due to debilitating diseases like stroke, Type 2
            Diabetes, kidney failure, and others. I felt at a loss of how to
            help them which led me to want to find a way to help prevent others
            from suffering this same fate. Finding a way to help empower,
            educate, and support individuals on their journeys to achieving
            optimal health became my passion and something I feel so grateful to
            be able to do!
          </p>
          <p>
            Plant-based nutrition and other healthy lifestyle practices can help
            us to look and feel our best! Research has shown the numerous
            benefits to eating plant-based or moving in that direction and
            embracing other elements of SPARC. A few of the health problems that
            can be lessened or resolved by embracing the SPARC practices
            include:
          </p>
          <div className={styles.health_problem_list}>
            <List data={homeData2} />
          </div>
        </section>
        <Cards />
        <PictureCards />
      </section>
    </>
  );
}
