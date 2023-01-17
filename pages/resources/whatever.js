import React from "react";
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

import { documentariesData } from "../../Data/documenteriesData";
import { mealdeliveryData } from "../../Data/mealdeliveryData";

const ResourcesPage = () => {

  const documentariesResources = documentariesData()
  const mealdeliveryResources = mealdeliveryData()

  documentariesResources.map(())

  data={documentariesData}
  data={mealdeliveryData}

  data.map((item) => {
    Grid item
  })

  mealdeliveryResources.map
  return (
    <Container>
      <Grid
        container
        style={{ marginTop: "230px" }}
        spacing={2}
        margin="0 auto"
      >
        {data.map((item) => {

        })}
        <Grid
          item
          xs={3}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        >
          <Card sx={{ maxWidth: 345 }}>
            <Image
              width="100"
              height="100"
              alt="Forks Over Knives"
              src="/images/forksoverknives.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Forks Over Knives
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="https://www.forksoverknives.com/the-film/">
                <Button size="small">Learn More</Button>
              </Link>
             
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcesPage;

