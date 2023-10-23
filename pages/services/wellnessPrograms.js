import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Grid, Card } from "@mui/material";

import { wellnessProgramsData } from "../../src/componentsData/wellnessPrograms";
import { wellnessProgramsData2 } from "../../src/componentsData/wellnessPrograms";
import { wellnessProgramsData4 } from "../../src/componentsData/wellnessPrograms";
import Slideshow from "../../src/components/Slideshow";

import { api } from "../api/api";

import List from "../../src/components/List";

import styles from "../../src/styles/WellnessPrograms.module.css";

const WellnessPrograms = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await api.get(`/testimonials`);
      const { data } = response;
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);
  return (
    <>
      <Slideshow title="Wellness Programs" />
      <Container style={{ marginTop: "50px" }}>
        <section className={styles.inner_container}>
          <div className={styles.consultation_package}>
            <h2 className={styles.offerings_title}>
              Nature’s Wellness Path’s Plant-Powered Weight Loss & Wellness
              Programs are right for you if you are:
            </h2>
            <p style={{ marginBottom: "15px" }}>
              Programs are a series of structured sessions that cover pertinent
              topics each week that can help to conquer your health-related
              challenges.
            </p>
            <p style={{ marginBottom: "15px" }}>
              Program sessions also include time for open discussion, addressing
              questions and challenges, and celebrating successes as well as
              action steps for the coming week!
            </p>

            <p style={{ marginBottom: "15px" }}>
              If you are experiencing any or all of the following, the
              plant-powered weight loss and wellness program could be just what
              you need to transform your health and achieve your ideal weight
              and optimal wellness:
            </p>
            <List
              data={wellnessProgramsData}
              className={styles.offering_list}
            />
            <Image
              className={styles.offerings_img}
              src="https://quotefancy.com/media/wallpaper/3840x2160/1755552-Virgil-Quote-The-greatest-wealth-is-health.jpg"
              alt="wealth is health"
              width={400}
              height={300}
            />
            <h3 className={styles.path_title}>
              Pick Your Plant-Powered Path To Optimal Wellness
            </h3>
            <Grid
              className={styles.grid_container}
              container
              spacing={2}
              style={{ marginTop: "20px" }}
            >
              <Grid item lg={6} sm={12}>
                <Card
                  md={12}
                  sx={{ mt: 3, py: 4, px: 10, height: "400px" }}
                  className={styles.content_paragraph}
                >
                  <p style={{ marginBottom: "10px" }}>
                    Path #1: 4 Week Plant-Powered Wellness Jumpstart
                  </p>
                  <List
                    data={wellnessProgramsData2}
                    className={styles.offering_list}
                  />
                  <p>Cost: $200</p>
                </Card>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Card
                  sx={{ mt: 3, py: 4, px: 10, height: "400px" }}
                  className={styles.content_paragraph}
                >
                  <p style={{ marginBottom: "10px" }}>
                    Path #2: 12 Week Plant-Powered Weight Loss & Wellness
                    Immersion
                  </p>
                  <List
                    data={wellnessProgramsData4}
                    className={styles.offering_list}
                  />
                  <p>Cost: $600</p>
                </Card>
              </Grid>
            </Grid>
            {/* 
            <div className={styles.path}></div> */}

            <div>
              <Card sx={{ mt: 3, mb: 3, py: 2, px: 2, height: "120px" }}>
                {" "}
                Contact me to schedule a free discovery call to learn more about
                the programs and how they can help you to conquer your weight
                loss and wellness challenges!
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
          </div>
        </section>
      </Container>
    </>
  );
};

export default WellnessPrograms;
