import React from "react";
import styles from "./Messages.module.css"
import Inbox from "../Inbox/Inbox";
import Outbox from "../Outbox/Outbox";

const Messages = (props) => {
    return (
        <div className={styles.Messages}>
            <Inbox />
            <Inbox />
            <Outbox />
            <Inbox />
        </div>
    )
}

export default Messages