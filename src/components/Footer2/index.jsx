import React from "react";

import styles from "./styles.module.css";
export default class Footer2 extends React.Component {
  render() {
    function currentTime() {
      let time = new Date();
      let timeNow = time.getUTCFullYear();
      return timeNow;
    }
    return (
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_container_top}>
            <div>
              <h3 style={{ marginTop: "10px" }}>Contact Us</h3>
              <p>
                <span>
                  <a
                    href="mailto: emilyperrymanrd@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    emilyperrymanrd@gmail.com
                  </a>
                </span>
              </p>
              <div className={styles.filler}></div>
            </div>
            <div className={styles.footer_container_top_title}>
              <h3>Serving</h3>
              <p>Baltimore County, MD, Since 2021</p>
            </div>

            <div className={styles.footer_container_top_title}>
              <h3>Office Hours</h3>
              <p>Monday-Friday 7am-7pm</p>
              <p>Saturday 9am-3:00pm</p>
              <p>Sunday closed</p>
            </div>
            <div className={styles.footer_container_top_title}>
              <h3>Follow Us</h3>
            </div>
          </div>
          <div className={styles.footer_container_bottom}>
            <address className={styles.footer_copyright}>
              <p>DietrichLandCare ©{currentTime()}</p>
            </address>
          </div>
        </div>
      </footer>
    );
  }
}
