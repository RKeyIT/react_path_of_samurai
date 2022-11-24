import React from "react";
import styles from "./Messages.module.css"
import Inbox from "../Inbox/Inbox";
import Outbox from "../Outbox/Outbox";

const Messages = (props) => {

    const isFromCurrentUser = ownerId => {
        return ownerId === "000000" // ? true : false - выражение итак вернёт тру или фолс!
    //    '000000' is ID of user who opened messages from his account
    //    That's need for different (My/Not my) showing messages
    }

    const messagesHistory =
        props.MessagesData.map(el => isFromCurrentUser(el) ? <Outbox message={el.message} /> : <Inbox message={el.message} />)

    return (
        <div className={styles.Messages}>
            {messagesHistory}
            {/*<Inbox message={message(0)}/>*/}
            {/*<Inbox message={message(1)}/>*/}
            {/*<Outbox message={message(2)}/>*/}
            {/*<Inbox message={message(3)}/>*/}
        </div>
    )
}

export default Messages