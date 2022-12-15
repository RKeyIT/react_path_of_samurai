import React from "react";
import styles from "./Messages.module.css"

const MessagesUI = (props) => {
    return (
        <div className={styles.Messages}>
            {props.messagesHistory}
        </div>
    )
}

export default MessagesUI