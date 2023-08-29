import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.social_icons}>
        {/* <div className={styles.inner}>
          <SocialIcons />
        </div> */}
      </div>
      <div className={styles.header_content}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Image
              width={160}
              height={160}
              src={"/images/logo.png"}
              alt="Nature's Wellness Path logo"
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
              <div className={styles.dropdown_content}></div>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <div className={styles.services_link} disabled={true}>
                  Services
                </div>
                <div className={styles.dropdown_content}>
                  <Link
                    className={styles.sublink}
                    href="/services/coachingPackages"
                  >
                    <span style={{ color: "#67a97b" }}>Coaching Packages</span>
                  </Link>
                  <Link href="/services/wellnessPrograms">
                    <span style={{ color: "#67a97b" }}>Wellness Programs</span>
                  </Link>
                </div>
              </li>

              <li>
                {/* <Link href="/blogs">Blogs</Link> */}
                {/* <div className={styles.dropdown_content}>
                  <Link href="/nutrition">Nutrition</Link>

                  <Link href="/move-your-body">Move Your Body</Link>
                </div> */}
              </li>
              {/* <li>
                <Link href="/faq">FAQ</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
