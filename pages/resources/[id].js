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
      // setTitle(data[0].name)
      console.log("resources-infor: ", data);
    };
    fetchTitle();
  }, [id]);

  return (
    <div>
      <h1>{title}</h1>
      <Container>
        <Grid
          container
          style={{ margin: "100px auto" }}
          align="center"
          justifyContent="center"
          alignItems="center"
        >
          {cards.map((card) => {
            return (
              <>
                <Grid item key={card.id}>
                  <Card sx={{ maxWidth: 345 }} style={{ marginRight: "20px" }}>
                    <Image
                      width="150"
                      height="150"
                      alt="Forks Over Knives"
                      src={url + card.image}
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
                      <Link href={card.url} target="_blank">
                        <Button size="small">Learn More</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ResourcesId;

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const getPropsPage = (name) => {
//     switch (name) {
//       case "documentaries":
//         return documentariesData();
//       case "mealdelivery":
//         return mealdeliveryData();
//       default:
//         return [];
//     }
//   };

//   const props = getPropsPage(context.params.name);
//   return {
//     props: JSON.stringify(props),
//   };
// }
