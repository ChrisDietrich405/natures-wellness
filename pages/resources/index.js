import React, { useEffect, useState } from "react";
import { api, BASE_URL } from "../api/api";
import { useRouter } from "next/router";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Container } from "@mui/system";
import { makeStyles } from "@mui/styles"; // Import makeStyles
import Slideshow from "../../src/components/Slideshow";

import styles from "../../src/styles/Resources.module.css";

const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: "#000", // Change this to your desired background color
    color: "white",
    "&:hover": {
      backgroundColor: "#67a97b", // Change this to your desired hover background color
    },
  },
}));

const Resources = () => {
  const [resources, setResources] = useState([]);

  const router = useRouter();
  const classes = useStyles(); // Initialize useStyles

  useEffect(() => {
    const fetchResource = async () => {
      const response = await api.get(`/resources`);
      const { data } = response;
      setResources(data);
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
                  src={BASE_URL + resource.image}
                  height="200"
                  width="200"
                  alt={resource.name}
                  style={{
                    width: "100%",
                    height: "75%",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                />
                <CardActions style={{ marginTop: "auto" }}>
                  <Button
                    className={classes.customButton} // Apply custom class
                    variant="contained"
                    onClick={() => router.push(`/resources/${resource.id}`)}
                    size="small"
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
