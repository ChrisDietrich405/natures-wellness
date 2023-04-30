import React, { useEffect, useState } from "react";

import { wellnessProgramsData } from "../../src/componentsData/wellnessPrograms";
import { wellnessProgramsData2 } from "../../src/componentsData/wellnessPrograms";
import { wellnessProgramsData3 } from "../../src/componentsData/wellnessPrograms";
import { wellnessProgramsData4 } from "../../src/componentsData/wellnessPrograms";

import {
  coachingData,
  coachingData2,
  coachingData3,
  coachingData4,
} from "../../src/componentsData/coachingPackages";

import { api } from "../api/api";

import List from "../../src/components/List";

import styles from "../../src/styles/WellnessPrograms.module.css";

const WellnessPrograms = () => {
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
    <main style={{ margin: "50px auto" }}>
      <div className={styles.wellness_container}>
        <h2 className={styles.offerings_title}>
          Nature’s Wellness Path’s Plant-Powered Weight Loss & Wellness Programs
          are right for you if you are:
        </h2>
        <p>
          Programs are a series of structured sessions that cover pertinent
          topics each week that can help to conquer your health-related
          challenges.
        </p>
        <p>
          Program sessions also include time for open discussion, addressing
          questions and challenges, and celebrating successes as well as action
          steps for the coming week!
        </p>

        <p>
          If you are experiencing any or all of the following, the plant-powered
          weight loss and wellness program could be just what you need to
          transform your health and achieve your ideal weight and optimal
          wellness:
        </p>

        <List data={wellnessProgramsData} className={styles.offering_list} />

        {/* <img
          className={styles.offerings_img}
          src="https://quotefancy.com/media/wallpaper/3840x2160/1755552-Virgil-Quote-The-greatest-wealth-is-health.jpg"
          alt=""
        /> */}
        <h3 className={styles.path_title}>
          Pick You Plant-Powered Path To Optimal Wellness
        </h3>
        <div className={styles.path}>
          <p>Path #1: 4 Week Plant-Powered Wellness Jumpstart</p>
          <List data={wellnessProgramsData2} className={styles.offering_list} />
          <p>Cost: $150</p>
        </div>
        <div className={styles.path}>
          <p>Path #2: 8 Week Program</p>
          <List data={wellnessProgramsData3} className={styles.offering_list} />
          <p>Cost: $275</p>
        </div>
        <div className={styles.path}>
          <p>
            Path #3: 12 Week Program: longest program option, ideal for those
            who are l
          </p>
          <List data={wellnessProgramsData4} className={styles.offering_list} />
          <p>Cost: $425</p>
          <p>
            Contact me to schedule a free discovery call to learn more about the
            programs and how they can help you to conquer your weight loss and
            wellness challenges!
          </p>
        </div>
      </div>
      <section className="inner-container">
        <h2 className="page_title">Wellness Programs</h2>
        <div className={styles.consultation_package}>
          <h2>2 Session Package:</h2>
          <p>Package includes:</p>
          <List data={coachingData} />
          <p>Cost: $120</p>
        </div>
        <div className={styles.consultation_package}>
          <h2>4 session package</h2>
          <p>Package includes:</p>
          <List data={coachingData2} />
          <p>Cost: $200</p>
        </div>
        <div className={styles.consultation_package}>
          <h2>6 session package</h2>
          <p>Package includes:</p>
          <List data={coachingData3} />
          <p>Cost: $275</p>
        </div>
        <div className={styles.consultation_package}>
          <h2>Follow-Up Session Package</h2>
          <p>
            If you interested in continuing to work together and to receive
            ongoing support and accountability, this is a good option for you!
          </p>
          <p>Package includes:</p>
          <List data={coachingData4} />
          <p>Cost: $100 for first set of follow-ups, $90 for subsequent ones</p>
        </div>
        Plant-Powered Weight Loss and Wellness Programs Nature’s Wellness Path’s
        Plant-Powered Programs are right for you if you are: ● Sick of dieting,
        counting calories, &amp; cutting portion sizes to try to lose weight? ●
        Fed up with feeling like a failure for falling off track with your diet
        or health-related goals? ● Dreaming of the day when you will have more
        energy and less joint pain to do the activities you enjoy? ● Wanting to
        improve your blood pressure, cholesterol, and blood sugar without
        medications? ● Looking to improve your skin, gut, and brain health? ●
        Curious about trying out a plant-based diet but not sure how to get
        started? ● Ready to take greater control of your health? You deserve to
        experience abundant energy &amp; optimal health! I am happy and humbled
        to help guide you on your journey to achieve such! **Options for 4-, 8-,
        and 12-week programs Book a free discovery call with me today so we can
        discuss your health-related challenges, goals, and how we can work
        together to get you on the path to optimal health!
      </section>
    </main>
  );
};

export default WellnessPrograms;
