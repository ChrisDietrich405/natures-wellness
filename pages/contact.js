import React from 'react'
import styles from "../src/styles/Contact.module.css"

const contact = () => {
  return (
    <div>contact</div>
  )
}

export default contact


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
