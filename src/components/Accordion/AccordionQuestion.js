import React, { useState } from "react";
import styles from "./styles.module.css";

const AccordionQuestion = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.accordion_question}>
      <h3 onClick={() => setShowInfo(!showInfo)}>{question.title}</h3>
      {showInfo && (
        <div className={styles.answer_container}>
          <p>{question.info}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionQuestion;


