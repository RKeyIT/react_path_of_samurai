import React from "react";
import styles from "./Outbox.module.css"

const Outbox = (props) => {
    return (
        <div className={styles.Outbox}>
            {/*<Message text={props.text} />*/}
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default Outbox;