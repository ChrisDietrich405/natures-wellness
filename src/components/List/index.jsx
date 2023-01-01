import React from 'react'
import styles from "./styles.module.css"

const List = ({ ordered, data }) => {
    return (
        <>
            {ordered ? (
                <ol className={styles.ordered_list}>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ol>
            ) : (
                <ul className={styles.unordered_list}>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default List