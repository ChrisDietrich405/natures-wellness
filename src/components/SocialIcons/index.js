import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import styles from "./styles.module.css";

const SocialIcons = () => {
  return (
    <ul className={styles.social_icons_list}>
      <li>
        <a href="#">
          <BsFacebook />
        </a>
      </li>
      <li>
        <a href="#">
          <BsInstagram />
        </a>
      </li>
      <li>
        <a href="#">
          <BsTwitter />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
