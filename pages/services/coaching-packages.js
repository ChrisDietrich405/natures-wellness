import React from "react";
import { Container } from "@mui/material";

import {
  coachingData,
  coachingData2,
  coachingData3,
  coachingData4,
} from "../../src/componentsData/coachingPackages";

import List from "../../src/components/List";
import Slideshow from "../../src/components/Slideshow";

import styles from "../../src/styles/CoachingPackages.module.css";

const CoachingPackages = () => {
  return (
    <>
      <Slideshow title="Coaching Packages" />
      <Container style={{ marginTop: "50px" }}>
        <section className={styles.inner_container}>
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
        </section>
      </Container>
    </>
  );
};

export default CoachingPackages;
