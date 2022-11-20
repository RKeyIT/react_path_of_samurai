import React from "react";
import styles from './Contact.module.css'
import {NavLink} from "react-router-dom";

const Contact = (props) => {
    return (
        <div className={styles.Contact}>
            <NavLink to={props.id}>
                <div className={styles.username}>{props.username || 'USER_NAME'}</div>
                <div className={styles.user_message}>{props.user_message || 'USER_MESSAGE'}</div>
            </NavLink>
        </div>
    )
}

export default Contact