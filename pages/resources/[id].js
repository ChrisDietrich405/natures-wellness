import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { api } from "../api/api";

const ResourcesId = (props) => {
  const [cards, setCards] = useState([]);

  const url = "http://localhost:3001/"

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchResources = async () => {
      const response = await api.get(`/resources/${id}`);
      const { data } = response;
      setCards(data);
    };
    fetchResources();
  }, [id]);

  console.log(cards);
  return (
    <div>
      <Container>
        <Grid
          container
          style={{ marginTop: "230px" }}
          spacing={2}
          margin="0 auto"
        >
          {cards.map((card) => {
            return (
              <>
                <Card sx={{ maxWidth: 345 }}>
                  <Image
                    width="100"
                    height="100"
                    alt="Forks Over Knives"
                    src={url + card.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={card.url}>
                      <Button size="small">Learn More</Button>
                    </Link>
                  </CardActions>
                </Card>
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
