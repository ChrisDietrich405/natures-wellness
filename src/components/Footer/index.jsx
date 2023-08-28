import React from "react";

import styles from "./styles.module.css";
export default class Footer extends React.Component {
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
            <div className={styles.footer_container_top_title}>
              <h3 style={{ marginTop: "10px" }}>Contact Us</h3>

              <div className={styles.footer_contact_container}>
                <a
                  href="https://heal.me/practitioner/emily-perryman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule an appointment
                </a>
                <a
                  href="mailto: emilyperrymanrd@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  emilyperrymanrd@gmail.com
                </a>
              </div>

              {/* <div className={styles.filler}></div> */}
            </div>
            <div className={styles.footer_container_top_title}>
              <h3>Serving</h3>
              <p>Baltimore County, MD, Since 2019</p>
            </div>

            <div className={styles.footer_container_top_title}>
              <h3>Office Hours</h3>
              <p> Monday, Wednesday, Friday: 7 am-6 pm</p>
            </div>
          </div>

          <address
            style={{ textAlign: "center" }}
            className={styles.footer_copyright}
          >
            Nature's Wellness PathCopyright ©{currentTime()}
          </address>
        </div>
      </footer>
    );
  }
}
