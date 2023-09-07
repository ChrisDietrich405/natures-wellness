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
  const [post, setPost] = useState({});

  const url = "http://localhost:3001/";

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get(`/posts/${id}`);
      const { data } = response;
      setPost(data);
      console.log(data);
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      <Container style={{ marginTop: "50px" }} style={{ marginTop: "100px" }}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        {/* <Grid
          spacing={4}
          container
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "1fr",
          }}
        >
          <Grid item>
            <Card
              sx={{ p: 2 }}
              style={{
                border: "1px solid black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
             
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {post.summary}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
              <CardActions>
             
              </CardActions>
            </Card>
          </Grid>
        </Grid> */}
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
