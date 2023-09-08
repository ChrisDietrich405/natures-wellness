import Image from "next/image";
import { Container, Grid, Card } from "@mui/material";

import Title from "../../src/components/Title";
import { aboutData, aboutData2, aboutData3 } from "../../src/data/aboutData";
import List from "../../src/components/List";

const EmPicture = "/images/home-profile.jpg";

import styles from "../../src/styles/About.module.css";
import Slideshow from "../../src/components/Slideshow";

const About = () => {
  return (
    <>
      <Slideshow title="About Em" />
      <Container style={{ marginTop: "50px" }}>
        <section>
          <div className={styles.title_container}>
            <h2 className={styles.about_intro_sub_title}>
              I help men and women lose weight and prevent or reverse chronic
              diseases in a sustainable and enjoyable manner by teaching the
              power of cultivating healthy habits related to eating more plants
              and embracing healthy lifestyle practices.
            </h2>
          </div>
          <div className={styles.about_intro}>
            <Image
              src={EmPicture}
              width={300}
              height={300}
              alt="Em photo"
              className={styles.photo}
            ></Image>

            <div className={styles.about_intro_text}>
              {/* <h1 className="page_title">'Hi, I'm Em!'</h1> */}
              <p>
                I have an immense passion for helping guide others toward a more
                healthful and vibrant life. This passion has led me to pursue a
                career as a Registered Dietitian, to obtain a Masters Degree in
                Nutrition, and to learn as much as I can about balanced
                nutrition and healthy lifestyle practices.{" "}
              </p>
              <p>
                Early in my career as a Dietitian at several nursing homes in
                Baltimore City, I witnessed what seemed like immense suffering
                and reduced quality of life in men and women, some as young as
                myself at the time (late 20s) due to debilitating diseases like
                stroke, Type 2 Diabetes, kidney failure, and others.
              </p>
              <p>
                I felt at a loss of how to help them which led me to want to
                find a way to help prevent others from suffering this same fate.
                Finding a way to help empower, educate, and support individuals
                on their journeys to achieving optimal health became my passion
                and something I feel so grateful to be able to do!
              </p>

              {/* )} */}
            </div>
          </div>
          <div className={styles.content_text}>
            <p>
              Eating more plants and engaging in healthy lifestyle practices can
              help us to look and feel our best! A few of the health problems
              that can be lessened or resolved a plant-predominant or
              plant-based way of eating and healthy lifestyle practices
              includes:
            </p>
            <div style={{ marginBottom: "10px" }}>
              <List data={aboutData} ordered className={styles.ordered_list} />
            </div>
            <Grid container spacing={2} style={{ marginTop: "20px" }}>
              <Grid item lg={6}>
                <Card sx={{ mt: 3, py: 4, px: 10, height: "600px" }}>
                  <p style={{ marginBottom: "10px" }}>
                    Stress-management and self care Plant-based nutrition and
                    purpose Adequate hydration and physical activity Restorative
                    sleep Connection and community
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    In addition to being the most effective, healthy, and
                    sustainable way to lose weight and maintain weight loss,
                    some health issues that are effectively addressed by
                    embracing these practices or doing our best to do so
                    include:
                  </p>
                  <List data={aboutData3} />
                </Card>
              </Grid>
              <Grid item lg={6}>
                <Card sx={{ mt: 3, py: 4, px: 10, height: "600px" }}>
                  <p style={{ marginBottom: "10px" }}>
                    I believe that all individuals have the right to live a full
                    and vibrant life. I feel that the foundation for living our
                    best lives is our health. Though our genes play a role in
                    our health, their role is small compared to the role that
                    healthful lifestyle practices have on our physical and
                    mental wellbeing.{" "}
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    {" "}
                    Healthy lifestyle practices that have a positive impact on
                    our physical and mental wellbeing include the following. I
                    denote them as SPARC to help us ignite these practices in
                    our life to achieve our optional physical and mental
                    wellbeing:{" "}
                  </p>
                  <List data={aboutData2} />
                </Card>
              </Grid>
            </Grid>
          </div>
        </section>
      </Container>
    </>
  );
};

export default About;
