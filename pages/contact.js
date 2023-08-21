import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import styles from "../src/styles/Contact.module.css";
import * as Validator from "validatorjs";

const publicKey = process.env.REACT_APP_USER_ID;

function Contact() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [errors, setErrors] = useState({});

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  console.log({ errors: errors });
  const sendEmail = (e) => {
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
          "required.firstName": "The name field is required",
          "required.lastName": "The name field is required",
          "required.email": "The email field is required",
          "required.message": "The message field is required",
        }
      );
      const validate = validator.passes();
      console.log(validator);
      if (validate) {
        var templateParams = {
          email: emailRef.current.value,
          message: messageRef.current.value,
          to_name: "Emily",
          firstName: firstNameRef,
          lastName: lastNameRef,
        };

        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_USER_ID
          )
          .then(
            (result) => {
              toast.success("Your message was successfully sent");
              firstNameRef.current.value = "";
              lastNameRef.current.value = "";
              emailRef.current.value = "";
              messageRef.current.value = "";
              setIsDisabled(false);
            },
            (error) => {
              toast.error("Your message wasn't sent. Try later");
              setIsDisabled(false);
            }
          );
      } else {
        setErrors(validator.errors.errors);
      }
    } catch (error) {
      console.log(error);
    }

    setIsDisabled(true);
  };

  return (
    <main className={styles.inner_container}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.contact_title}>
            {" "}
            <h1 style={{ marginBottom: "10px" }}>Connect with Us! </h1>{" "}
            <h3>
              Please contact me with any questions or reach out to schedule a
              &nbsp;
              <Link href="https://heal.me/practitioner/emily-perryman-registered-dietitian-nutritionist">
                free discovery call!
              </Link>
            </h3>
            <Image
              style={{
                margin: "20px 0px 0 20px",
                borderRadius: "4px",
                textAlign: "center",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
              src="/images/home-banner-1.jpg"
              alt="food picture"
              width={300}
              height={250}
            />
          </div>
          <div className={styles.form_wrapper}>
            <form onSubmit={sendEmail} className={styles.form}>
              <div className={styles.names}>
                <div className={styles.form_group}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstNameId"
                    type="text"
                    ref={firstNameRef}
                    name="firstName"
                    placeholder="First Name"
                    className={styles.input_text}
                    tabIndex="1"
                  />
                  {"firstName" in errors && (
                    <p className={styles.error_message}>
                      {errors.firstName.join(",")}
                    </p>
                  )}
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastNameId"
                    type="text"
                    ref={lastNameRef}
                    name="lastName"
                    placeholder="Last Name"
                    className={styles.input_text}
                    tabIndex="2"
                  />
                  {"lastName" in errors && (
                    <p className={styles.error_message}>
                      {errors.lastName.join(",")}
                    </p>
                  )}
                </div>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="exampleFormControlInput1">Email</label>
                <input
                  id="emailId"
                  type="email"
                  name="email"
                  ref={emailRef}
                  className={styles.input_text}
                  placeholder="example@corp.com"
                  tabIndex="3"
                />
                {"email" in errors && (
                  <p className={styles.error_message}>
                    {errors.email.join(",")}
                  </p>
                )}
              </div>
              <div className={styles.form_group}>
                <label htmlFor="exampleFormControlTextarea1">Message</label>

                <textarea
                  id="messageId"
                  placeholder="Start typing..."
                  className={styles.message}
                  name="message"
                  ref={messageRef}
                />
              </div>
              {"message" in errors && (
                <p className={styles.error_message}>
                  {errors.message.join(",")}
                </p>
              )}
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
          {/* <div className={styles.picture_wrapper}>
            <Image
              className={styles.grid_pic}
              src="/images/chickpeas.jpg"
              alt="grid-pic"
              width={300}
              height={300}
            ></Image>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default Contact;

// import React, { useRef } from "react";
// import { ContactResource } from "../../resources/contact-resource";

// import styles from "./styles.module.css";

// function Contact() {
//   const firstNameRef = useRef(null);
//   const lastNameRef = useRef(null);
//   const emailRef = useRef(null);
//   const messageRef = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = {
//       firstName: firstNameRef.current.value,
//       lastName: lastNameRef.current.value,
//       email: emailRef.current.value,
//       message: messageRef.current.value,
//     };
//     ContactResource.sendForm(data);
//     alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎");
//   };

//   return (
//     <section className="inner-container">
//       <div className={styles.inner}>
//         <div className={styles.columns}>
//           <div className={styles.form_wrapper}>
//             <form onSubmit={handleSubmit} className={styles.form}>
//               <h1>Contact Us</h1>
//               <p>We'll get back to you asap!</p>
//               <div className={styles.names}>
//                 <div className={styles.form_group}>
//                   <label for="firstName">First Name</label>
//                   <input
//                     type="text"
//                     ref={firstNameRef}
//                     name="firstName"
//                     placeholder="First Name"
//                     className={styles.input_text}
//                     tabIndex="1"
//                   />
//                 </div>
//                 <div className={styles.form_group}>
//                   <label for="lastName">Last Name</label>
//                   <input
//                     type="text"
//                     ref={lastNameRef}
//                     name="lastName"
//                     placeholder="Last Name"
//                     className={styles.input_text}
//                     tabIndex="2"
//                   />
//                 </div>
//               </div>
//               <div className={styles.form_group}>
//                 <label for="email">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   ref={emailRef}
//                   id="email"
//                   className={styles.input_text}
//                   placeholder="example@corp.com"
//                   tabIndex="3"
//                 />
//               </div>
//               <div className={styles.form_group}>
//                 <label for="message">Message</label>

//                 <textarea
//                   placeholder="Start typing..."
//                   className={styles.message}
//                   name="message"
//                   ref={messageRef}
//                 />
//               </div>
//               <div className={styles.form_group}>
//                 <button type="submit" className={styles.send_message}>
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className={styles.picture_wrapper}>
//             <img
//               className={styles.grid_pic}
//               src={"/images/tofu.png"}
//               alt="grid-pic"
//             ></img>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
