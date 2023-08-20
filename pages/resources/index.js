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
      <h1>Resources</h1>
      <Grid
        container
        spacing={4}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "1fr",
        }}
      >
        {resources.map((resource, index) => {
          return (
            <>
              <Grid item key={index}>
                <Card
                  sx={{ p: 2 }}
                  style={{
                    border: "1px solid black",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 style={{ minHeight: "50px", textAlign: "center" }}>
                    {resource.name}
                  </h3>
                  <Image
                    src={test + resource.image}
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
                      variant="contained"
                      onClick={() => router.push(`/resources/${resource.id}`)}
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

export default Resources;
