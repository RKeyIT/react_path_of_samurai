import React from "react";
import styles from "./Friend.module.css"

const Friend = (props) => {
    return (
        <div className={styles.friendBlock}>
            <div className={styles.friendCircle}></div>
            <div className={styles.friendName}>{props.name}</div>
        </div>
    )
}

export default Friend;