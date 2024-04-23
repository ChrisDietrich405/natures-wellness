import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import axios from "axios";
import { api } from "../api/api";

const ResourcesId = (props) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchResources = async () => {
      const response = await axios.get(
        `https://z1ek6m2k90.execute-api.us-east-1.amazonaws.com/dev/resourceInformation?resourceId=${id}`,
        {
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
      const { body } = response.data;
      setCards(body);
    };
    if (id) fetchResources();
  }, [id]);

  useEffect(() => {
    const fetchResource = async () => {
      const response = await axios.get(
        `https://z1ek6m2k90.execute-api.us-east-1.amazonaws.com/dev/resources/title?id=${id}`,
        {
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
      const { body } = response.data;
      setTitle(body);
    };
    if (id) fetchResource();
  }, [id]);

  return (
    <Container style={{ marginTop: "50px" }}>
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
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={200}
                    height={200}
                    alt={card.Title}
                    src={url + card.Image}
                  />
                  <CardContent>
                    <Typography
                      style={{ fontWeight: "bold", textAlign: "center" }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {card.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.Description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      style={{ backgroundColor: "#67a97b" }}
                      variant="contained"
                      target="_blank"
                      href={`${card.Url}`}
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
