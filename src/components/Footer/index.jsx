// import grid1 from "../../images/chickpeas.jpg";
// import grid2 from "../../images/tofu.png";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

// const publicURL = import.meta.env.VITE_PUBLIC_URL;

import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.footer_content}>
        <div className={styles.inner}>
          {" "}
          <div className={styles.grid_container}>
            <div className={styles.footer_container}>
              <div className={styles.nutritionist_pic_container}>
                {/* <img
                  src={publicURL + "/assets/images/tofu.png"}
                  className={styles.footer_pic}
                  alt="picture of dietician"
                ></img> */}
                {/* <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum accusantium, sit modi debitis repellat culpa.
                </p> */}
              </div>
              <div className={styles.meatless_monday_logo}>
                {/* <img
                  src={publicURL + "/assets/images/chickpeas.jpg"}
                  alt="picture of dietician"
                ></img> */}
              </div>
              <div className={styles.credentials}>
                {" "}
                {/* <img
                  src={publicURL + "/assets/images/tofu.png"}
                  alt="picture of dietician"
                ></img> */}
                {/* <p>Lorem ipsum dolor sit, amet</p>
                <p>accusantium, sit modi debitis </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_contacts}>
        <div className={styles.inner}>
          <address>Emily Website Copyright@2023</address>
          {/* <SocialIcons /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
