import Slideshow from "../src/components/Slideshow";
import { homeData } from "../src/data/homeData";
import List from "../src/components/List";

import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Slideshow />
      <section id="section">
        <h1 className={styles.home_title}>
          Welcome to Nature&apos;s Wellness Path
        </h1>
        <div className={styles.home_content}>
          <h2 className={styles.home_subtitle}>Are you:</h2>

          <List data={homeData} unordered className={styles.unordered_list} />
          <p>
            If you answered yes to any of these questions, you are not alone.
            Having worked with hundreds of men and women trying to lose weight
            and improve their health, I have witnessed the immense frustration
            and despair faced by those who, just like you, often have tried many
            different ways to lose weight and improve their health but have yet
            to find a way that is sustainable, inexpensive, and enjoyable. This
            is not a personal failure but rather one of our society-our diet
            culture, food industry, ease of access to inexpensive and processed
            foods, and the abundance of conflicting nutrition and health
            information do not make it easy.
          </p>
          <p style={{ marginTop: "20px" }}>
            I am here to help you to navigate the challenges that society has
            thrown on you by working with you to create and cultivate habits
            that can transform your health and happiness. I am here so that your
            dreams of losing weight and keeping it off, of having your clothes
            fit more loosely, for jumping out of bed in the morning with little
            or no stiffness, for abundant energy, reducing or eliminating your
            need for some or all medications, and more will become realities
            long-term.
          </p>
          <p className={styles.freeGuide}>
            Looking to lose weight & improve your health without sacrificing
            taste, feeling hungry, cutting portion sizes, or counting calories?
            Grab this free Sensational Six Guide to help you slim down while
            feeling satisfied and energized! Complete with servings to aim for,
            ideas on how to boost your intake of plant powerhouses, and links to
            some delicious recipes!
          </p>
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
        </div>
      </section>
    </>
  );
}
