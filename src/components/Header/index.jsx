import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

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
            <Image width={40} height={40}  src={"/images/tofu.png"} style={{ width: "60px" }} alt="" />
          </div>
          <div className={styles.nav_menu}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/recipes">Recipes</Link>
                <div className={styles.dropdown_content}>
                  <Link href="/breakfast">Breakfast</Link>
                  <Link href="/main-course">Main Course</Link>
                  <Link href="/appetizers-snacks">Appetizers & Snacks</Link>
                  <Link href="/smoothies-drinks">Smoothies & Drinks</Link>
                  <Link href="/desserts">Desserts</Link>
                  <Link href="/">Travel</Link>
                </div>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
                <div className={styles.dropdown_content}>
                  <Link href="/coaching-packages">Coaching Packages</Link>
                  <Link href="/wellness-programs">Wellness Programs</Link>

                  <Link href="/photography">Photography</Link>
                </div>
              </li>

              <li>
                <Link href="/blogs">Blogs</Link>
                <div className={styles.dropdown_content}>
                  <Link href="/nutrition">Nutrition</Link>

                  <Link href="/move-your-body">Move Your Body</Link>
                </div>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
