import React from "react";
import { Container, Grid, Card } from "@mui/material";
import Link from "next/link";
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
        <Grid
          className={styles.grid_container}
          container
          spacing={2}
          style={{ marginTop: "20px" }}
        >
          <Grid item lg={6} sm={12}>
            <Card
              md={12}
              sx={{ mt: 3, py: 4, px: 10, height: "600px" }}
              className={styles.content_paragraph}
            >
              <div className={styles.consultation_package}>
                <h2>2 Session Package:</h2>
                <p>Package includes:</p>
                <List data={coachingData} />
                <p>Cost: $115</p>
              </div>
            </Card>
          </Grid>
          <Grid item lg={6} sm={12}>
            <Card
              sx={{ mt: 3, py: 4, px: 10, height: "600px" }}
              className={styles.content_paragraph}
            >
              <div className={styles.consultation_package}>
                <h2>4 Session Package</h2>
                <p>Package includes:</p>
                <List data={coachingData2} />
                <p>Cost: $180</p>
              </div>
            </Card>
          </Grid>
          <Grid item lg={6} sm={12}>
            <Card
              sx={{ mt: 3, py: 4, px: 10, height: "600px" }}
              className={styles.content_paragraph}
            >
              <div className={styles.consultation_package}>
                <h2>6 session package</h2>
                <p>Package includes:</p>
                <List data={coachingData3} />
                <p>Cost: $240</p>
              </div>
            </Card>
          </Grid>
          <Grid item lg={6} sm={12}>
            <Card
              sx={{ mt: 3, py: 4, px: 10, height: "600px" }}
              className={styles.content_paragraph}
            >
              <div className={styles.consultation_package}>
                <h2>Follow-Up Session Package</h2>
                <p>
                  If you&apos;re interested in continuing to work together and to
                  receive ongoing support and accountability, this is a good
                  option for you!
                </p>
                <p>Package includes:</p>
                <List data={coachingData4} />
                <p>Follow-up session package: $100 for 3 sessions</p>
              </div>
            </Card>
          </Grid>
        </Grid>
        <div>
          <Card
            className={styles.contact_container}
            sx={{ mt: 3, mb: 3, py: 2, px: 2, height: "120px" }}
          >
            {" "}
            Contact me to schedule a free discovery call to learn more about the
            programs and how they can help you to conquer your weight loss and
            wellness challenges!
            <p className={styles.contact_btn_container}>
              <Link
                className={styles.contact_btn}
                target="_blank"
                href="https://heal.me/practitioner/emily-perryman-registered-dietitian-nutritionist"
              >
                Contact me
              </Link>{" "}
            </p>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default CoachingPackages;
