import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
            <Image
              width={40}
              height={40}
              src={"/images/tofu.png"}
              style={{ width: "60px" }}
              alt=""
            />
          </div>
          <div className={styles.nav_menu}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <div className={styles.dropdown_content}>
                {/* <Link href="/resources/1">Documentaries</Link>
                  <Link href="/resources/2">Meal Delivery Services</Link>
                  <Link href="/resources/3">Cookbooks</Link>
                  <Link href="/resources/4">Books</Link>
                  <Link href="/desserts">Cookbooks</Link>
                  <Link href="/">Travel</Link> */}
              </div>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
                <div className={styles.dropdown_content}>
                  <Link href="/services/coachingPackages">
                    Coaching Packages
                  </Link>
                  <Link href="/services/wellnessPrograms">
                    Wellness Programs
                  </Link>
                </div>
              </li>

              <li>
                <Link href="/blogs">Blogs</Link>
                {/* <div className={styles.dropdown_content}>
                  <Link href="/nutrition">Nutrition</Link>

                  <Link href="/move-your-body">Move Your Body</Link>
                </div> */}
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
