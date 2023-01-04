import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";
const logo = window.location.origin + "/assets/images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.social_icons}>
        <div className={styles.inner}>
          <SocialIcons />
        </div>
      </div>
      <div className={styles.header_content}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Image width={111} height={111} src={logo} style={{ width: "60px" }} alt="" />
          </div>
          <div className={styles.nav_menu}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
                <div className={styles.dropdown_content}>
                  <Link to="/breakfast">Breakfast</Link>
                  <Link to="/main-course">Main Course</Link>
                  <Link to="/appetizers-snacks">Appetizers & Snacks</Link>
                  <Link to="/smoothies-drinks">Smoothies & Drinks</Link>
                  <Link to="/desserts">Desserts</Link>
                  <Link to="/">Travel</Link>
                </div>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
                <div className={styles.dropdown_content}>
                  <Link to="/coaching-packages">Coaching Packages</Link>
                  <Link to="/wellness-programs">Wellness Programs</Link>

                  <Link to="/photography">Photography</Link>
                </div>
              </li>

              <li>
                <Link to="/blogs">Blogs</Link>
                <div className={styles.dropdown_content}>
                  <Link to="/nutrition">Nutrition</Link>

                  <Link to="/move-your-body">Move Your Body</Link>
                </div>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
