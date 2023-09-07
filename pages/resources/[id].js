import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { api } from "../api/api";

const ResourcesId = (props) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");

  const url = "http://localhost:3001/";

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchResources = async () => {
      const response = await api.get(`/resources_information/${id}`);
      const { data } = response;
      setCards(data);
      console.log("resources:", data);
    };
    fetchResources();
  }, [id]);

  useEffect(() => {
    const fetchTitle = async () => {
      const response = await api.get(`/resources/${id}`);
      const { data } = response;
      console.log(data);
      setTitle(data[0]?.name);
    };
    fetchTitle();
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
                    width="200"
                    height="200"
                    alt={card.title}
                    src={url + card.image}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Link
                      
                        href={`${card.url}`}
                        passHref
                        variant="contained"
                        size="small"
                        sx={{
                          width: "100%",
                          mt: "10px",
                        }}
                      >
                        <Button>About</Button>
                      </Link> */}
                    <Button
                      variant="contained"
                      target="_blank"
                      href={`${card.url}`}
                      // onClick={() => router.push(`${card.url}`)}
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
