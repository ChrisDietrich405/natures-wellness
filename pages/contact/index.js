import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import * as Validator from "validatorjs";
import { Container } from "@mui/material";

import Slideshow from "../../src/components/Slideshow";

import "react-toastify/dist/ReactToastify.css";
import styles from "../../src/styles/Contact.module.css";

const Contact = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [errors, setErrors] = useState({});

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const clearFormFields = () => {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const validator = new Validator(
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        },
        {
          firstName: "required",
          lastName: "required",
          email: "required|email",
          message: "required",
        },
        {
          "required.firstName": "The first name field is required",
          "required.lastName": "The last name field is required",
          "required.email": "The email field is required",
          "required.message": "The message field is required",
        }
      );

      if (validator.passes()) {
        const templateParams = {
          email: emailRef.current.value,
          message: messageRef.current.value,
          to_name: "Emily",
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_USER_ID
        );

        toast.success("Your message was successfully sent");
        clearFormFields();
      } else {
        setErrors(validator.errors.errors);
        toast.error("Please check the form for errors");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later");
    }

    setIsDisabled(false);
  };

  return (
    <>
      <Slideshow title="Connect with us" />
      <Container>
        <div className={styles.inner}>
          <div className={styles.columns}>
            <div className={styles.contact_title_wrapper}>
              <h3>
                Please contact me with any questions or reach out to schedule a{" "}
                <Link
                  target="_blank"
                  style={{ color: "#67a97b" }}
                  href="https://heal.me/practitioner/emily-perryman-registered-dietitian-nutritionist"
                >
                  free discovery call!
                </Link>
              </h3>
              <div className={styles.contact_title_wrapper_image}>
                <Image
                  className={styles.contact_image}
                  style={{}}
                  src="/images/home-banner-1.jpg"
                  alt="food picture"
                  width={300}
                  height={250}
                />
              </div>
            </div>
            <div className={styles.form_wrapper}>
              <form onSubmit={handleFormSubmit} className={styles.form}>
                <div className={styles.names}>
                  <div className={styles.form_group}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      ref={firstNameRef}
                      name="firstName"
                      placeholder="First Name"
                      className={styles.input_text}
                      tabIndex="1"
                    />
                    {errors.firstName && (
                      <p className={styles.error_message}>
                        {errors.firstName.join(", ")}
                      </p>
                    )}
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      ref={lastNameRef}
                      name="lastName"
                      placeholder="Last Name"
                      className={styles.input_text}
                      tabIndex="2"
                    />
                    {errors.lastName && (
                      <p className={styles.error_message}>
                        {errors.lastName.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    ref={emailRef}
                    className={styles.input_text}
                    placeholder="example@corp.com"
                    tabIndex="3"
                  />
                  {errors.email && (
                    <p className={styles.error_message}>
                      {errors.email.join(", ")}
                    </p>
                  )}
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Start typing..."
                    className={styles.message}
                    name="message"
                    ref={messageRef}
                  />
                  {errors.message && (
                    <p className={styles.error_message}>
                      {errors.message.join(", ")}
                    </p>
                  )}
                </div>
                <div className={styles.form_group}>
                  <button
                    type="submit"
                    className={styles.send_message}
                    disabled={isDisabled}
                  >
                    {isDisabled ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Contact;
