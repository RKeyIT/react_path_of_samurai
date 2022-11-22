import React from "react";
import styles from "./Messages.module.css"
import Inbox from "../Inbox/Inbox";
import Outbox from "../Outbox/Outbox";

const Messages = (props) => {

    let message = (id) => {
        return props.MessagesData[id].message
    }

    return (
        <div className={styles.Messages}>
            <Inbox message={message(0)}/>
            <Inbox message={message(1)}/>
            <Outbox message={message(2)}/>
            <Inbox message={message(3)}/>
        </div>
    )
}

export default Messages