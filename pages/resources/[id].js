import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles"; // Import makeStyles
import { useRouter } from "next/router";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { api } from "../api/api";

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

const ResourcesId = (props) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");

  const classes = useStyles(); // Initialize useStyles

  const url = process.env.NEXT_PUBLIC_BASE_URL

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchResources = async () => {
      const response = await api.get(`/resources-information/${id}`);
      const { data } = response;
      setCards(data);
    };
    fetchResources();
  }, [id]);

  useEffect(() => {
    const fetchTitle = async () => {
      const response = await api.get(`/resources/${id}`);
      const { data } = response;
      setTitle(data?.name);
    };
    if (id) {
      fetchTitle();
    }
  }, [id]);

  return (
    <Container style={{ marginTop: "100px" }}>
      <h1>{title}</h1>
      <Grid spacing={4} container>
        {cards.map((card, index) => {
          return (
            <>
              <Grid item key={index} xs={12} md={6} lg={3}>
                <Card
                  sx={{ p: 2 }}
                  style={{
                    border: "1px solid black",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    // className={styles.image}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={200}
                    height={200}
                    alt={card.title}
                    src={url + card.image}
                  />
                  <CardContent>
                    <Typography
                      style={{ fontWeight: "bold", textAlign: "center" }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={classes.customButton}
                      variant="contained"
                      target="_blank"
                      href={`${card.url}`}
                      size="small"
                      sx={{
                        width: "100%",
                        mt: "10px",
                      }}
                    >
                      Learn More{" "}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ResourcesId;
