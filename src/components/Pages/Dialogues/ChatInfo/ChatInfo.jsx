import React from "react";
import styles from "./ChatInfo.module.css"

const ChatInfo = (props) => {
    return (
        <div className={styles.ChatInfo}>
            <div className={styles.user_name}>
                {props.user_name}
            </div>
            <div className={styles.last_online}>
                {props.last_online}
            </div>
        </div>
    )
}

export default ChatInfo