import React from "react";
import styles from "./Dialogues.module.css"
import Contact from "./Contact/Contact";
import Inbox from "./Inbox/Inbox";
import Outbox from "./Outbox/Outbox";
import Search from "../Search/Search";

const Dialogues = (props) => {
    return (
        <div className={styles.Dialogues}>
            <div className={styles.contacts}>
                <Search name="contact_searching" id="contact_searching"/>
                <Contact />
                <Contact />
                <Contact username="Kirill Bohateriov" user_message="KEK!!=D" />
                <Contact username="Kardan Wislouhij"/>
                <Contact user_message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis distinctio perferendis accusamus cupiditate
                        necessitatibus velit! Fugiat officia explicabo, quia quo
                        magnam non saepe! Dicta facilis debitis quae, voluptate
                        aliquam veritatis?"/>
            </div>
            <div className={styles.messages}>
                <Search name="message_searching" id="message_searching"/>
                <Inbox />
                <Inbox />
                <Inbox />
                <Outbox />
                <Inbox />
            </div>
        </div>
    )
}

export default Dialogues