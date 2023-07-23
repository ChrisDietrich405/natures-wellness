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

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get(`/posts`);
      const { data } = response;
      console.log(data);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Grid
        container
        spacing={4}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "1fr",
        }}
      >
        {posts.map((post, index) => {
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
                  <Typography variant="h5" style={{ minHeight: "50px", textAlign: "center" }}>
                    {post.title}
                  </Typography>
                  <Typography variant="p">{post.summary}</Typography>
                  <CardActions style={{ marginTop: "auto" }}>
                    <Button
                      variant="contained"
                      onClick={() => router.push(`/blogs/${post.id}`)}
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

export default Blogs;
