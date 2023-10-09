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


// image:"/content/happycow.png"

// image:"/content/theveganstay.png"


// _id
// 6522f7247f254f5217d2fc8e
// id
// 61
// title
// "Vegan Stay"
// url
// "https://www.theveganstay.com"
// description
// null
// image
// "/content/theveganstay.png"
// resource_id
// 10


// _id
// 6522f42b7f254f5217d2fc8b
// id
// 58
// title
// "Happy Cow"
// url
// "https://www.happycow.net/"
// description
// null
// image
// "/content/happycow.png"
// resource_id
// 10
