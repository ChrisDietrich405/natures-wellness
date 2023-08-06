import { Container, Grid, Typography } from "@mui/material";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} style={{ borderTop: "1px solid black" }}>
      <Container sx={{ marginTop: "34px" }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>
            <Typography variant="h5" component="h5" mb={1}>
              Contact Me Anytime
            </Typography>
            <Typography variant="p" component="p" mb={1}>
              emilyperrymanrd@gmail.com
            </Typography>
            <Typography variant="p">
              https://heal.me/practitioner/emily-perryman
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography variant="h5" component="h5" mb={1}>
              Offerings
            </Typography>
            <Typography variant="p" component="p" mb={1}>
              In-person (Baltimore area)
            </Typography>
            <Typography variant="p">
              Virtual nutrition consults & wellness programs{" "}
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography variant="h5" component="h5" mb={1}>
              Hours
            </Typography>
            <Typography variant="p" component="p" mb={1}>
              Monday, Wednesday, Friday: 7 am-6 pm
            </Typography>

            <Typography variant="p">Saturday: 7 am-noon</Typography>
            <p></p>
          </Grid>
        </Grid>
        <div style={{ marginTop: "40px" }}>
          <address style={{ textAlign: "center" }}>
            Emily Website Copyright@2023
          </address>
          {/* <SocialIcons /> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

//   <div className={styles.footer_content}>
//   <div className={styles.inner}>
//     {" "}
//     <div className={styles.grid_container}>
//       <div className={styles.footer_container}>
//         <div className={styles.nutritionist_pic_container}>
//           {/* <img
//             src={publicURL + "/assets/images/tofu.png"}
//             className={styles.footer_pic}
//             alt="picture of dietician"
//           ></img> */}
//           {/* <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             Earum accusantium, sit modi debitis repellat culpa.
//           </p> */}
//         </div>
//         <div className={styles.meatless_monday_logo}>
//           {/* <img
//             src={publicURL + "/assets/images/chickpeas.jpg"}
//             alt="picture of dietician"
//           ></img> */}
//         </div>
//         <div className={styles.credentials}>
//           {" "}
//           {/* <img
//             src={publicURL + "/assets/images/tofu.png"}
//             alt="picture of dietician"
//           ></img> */}
//           {/* <p>Lorem ipsum dolor sit, amet</p>
//           <p>accusantium, sit modi debitis </p> */}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className={styles.footer_contacts}>
//   <div className={styles.inner}>
//     <address>Emily Website Copyright@2023</address>
//     {/* <SocialIcons /> */}
//   </div>
// </div>
