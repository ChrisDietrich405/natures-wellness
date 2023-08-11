import React from "react";
// import Banner from "../../components/Banner";

// import Text from "../../components/Text";

import {
  coachingData,
  coachingData2,
  coachingData3,
  coachingData4,
} from "../../src/componentsData/coachingPackages";

import List from "../../src/components/List";

import styles from "../../src/styles/CoachingPackages.module.css";

const CoachingPackages = () => {
  return (
    <>
      <section className="inner-container">
        <h2 className="page_title">Coaching Packages</h2>
        <div className={styles.consultation_package}>
          <h2>2 Session Package:</h2>
          <p>Package includes:</p>
          <List data={coachingData} />
          <p>Cost: $115</p>
        </div>
        <div className={styles.consultation_package}>
          <h2>4 session package</h2>
          <p>Package includes:</p>
          <List data={coachingData2} />
          <p>Cost: $180</p>
        </div>
        <div className={styles.consultation_package}>
          <h2>6 session package</h2>
          <p>Package includes:</p>
          <List data={coachingData3} />
          <p>Cost: $240</p>
        </div>
        <div className={styles.consultation_package}>
          <h2>Follow-Up Session Package</h2>
          <p>
            If you interested in continuing to work together and to receive
            ongoing support and accountability, this is a good option for you!
          </p>
          <p>Package includes:</p>
          <List data={coachingData4} />
          <p>Follow-up session package: $100 for 3 sessions</p>
        </div>
        {/* Plant-Powered Weight Loss and Wellness Programs Nature’s Wellness Path’s
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
        together to get you on the path to optimal health! */}
      </section>
    </>
  );
};

export default CoachingPackages;
