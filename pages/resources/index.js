import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Container } from "@mui/system";
import Slideshow from "../../src/components/Slideshow";

import styles from "../../src/styles/Resources.module.css";

const Resources = () => {
  const [resources, setResources] = useState([]);

  const router = useRouter();

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchResource = async () => {
      const response = await axios.get(
        `https://z1ek6m2k90.execute-api.us-east-1.amazonaws.com/dev/resources`,
        {
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
   
      const { body } = response.data;
      setResources(body);
    };
    fetchResource();
  }, []);

  return (
    <>
      <Slideshow title="Resources" style={{ marginBottom: "20px" }} />
      <Container className={styles.resources_wrapper}>
        <Grid container spacing={4}>
          {resources.map((resource, index) => (
            <Grid item key={index} xs={12} md={6} lg={3}>
              <Card
                sx={{ p: 2 }}
                style={{
                  border: "1px solid black",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              >
                <h3 style={{ minHeight: "50px", textAlign: "center" }}>
                  {resource.name}
                </h3>
                <Image
                  className={styles.image}
                  src={`${resource.image}`}
                  height={300}
                  width={300}
                  style={{ objectFit: "contain" }}
                  alt={resource.name}
                />
                <CardActions style={{ marginTop: "auto" }}>
                hell0
                  <Button
                    style={{ backgroundColor: "#67a97b" }}
                    variant="contained"
                    onClick={() => router.push(`/resources/${resource.ID}`)}
                    size="small"
                    button
                    sx={{
                      width: "100%",
                      mt: "10px",
                    }}
                  >
                    Learn More 
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Resources;
