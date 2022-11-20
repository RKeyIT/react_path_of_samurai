import React from "react";
import styles from './Contact.module.css'

const Contact = (props) => {
    return (
        <div className={styles.Contact}>
            <div className={styles.username}>{props.username || 'USER_NAME'}</div>
            <div className={styles.user_message}>{props.user_message || 'USER_MESSAGE'}</div>
        </div>
    )
}

export default Contact