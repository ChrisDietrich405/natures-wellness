import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";

import styles from "./styles.module.css";

const SocialIcons = () => {
  return (
    <ul className={styles.social_icons_list}>
      <li>
        <Link href="https://www.facebook.com/natureswellnesspath" target="_blank">
          <BsFacebook />
        </Link>
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
