import React from "react";
import styles from "./Inbox.module.css"

const Inbox = (props) => {
    return (
        <div className={styles.Inbox}>{props.message}</div>
    )
}


export default Inbox;