import React, { useEffect, useState } from "react";
import { api, test } from "../api/api";
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

const Resources = () => {
  const [resources, setResources] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchResource = async () => {
      const response = await api.get(`/resources`);
      const { data } = response;
      console.log(data);
      setResources(data);
    };
    fetchResource();
  }, []);
  return (
    <Container style={{ marginTop: "100px" }}>
      <Grid container spacing={2}>
        {resources.map((resource, index) => {
          return (
            <>
              <Grid item xs={3} gap="20px">
                <Card>
                  <h2>{resource.name}</h2>
                  <Image
                    src={test + resource.image}
                    height="300"
                    width="300"
                    alt={resource.name}
                  />
                  <CardActions>
                    <Button
                      onClick={() => router.push(`/resources/${resource.id}`)}
                      size="small"
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

export default Resources;
