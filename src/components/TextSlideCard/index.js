import React from 'react'
import styles from "./styles.module.css"

const TextSlideCard = ({listItem}) => {
  return (
    <div className={styles.slide_container}>
        <h4>{listItem.title}</h4>
        <p>{listItem.body}</p>
        <p className={styles.name}>{listItem.name}</p>
    </div>
  )
}

export default TextSlideCard