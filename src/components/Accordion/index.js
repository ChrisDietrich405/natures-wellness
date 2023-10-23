import React, { useState } from "react";
import AccordionQuestion from "./AccordionQuestion";

import styles from "./styles.module.css";

const Accordion = ({ questions }) => {
  return (
    <div className={styles.accordion_wrapper}>
      {questions.map((question, index) => {
        return <AccordionQuestion key={index} question={question} />;
      })}
    </div>
  );
};

export default Accordion;
