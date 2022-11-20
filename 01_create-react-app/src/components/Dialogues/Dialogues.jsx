import React from "react";
import styles from "./Dialogues.module.css"
import Contact from "./Contact/Contact";
import Search from "../Search/Search";
import ChatInfo from "./ChatInfo/ChatInfo";
import Messages from "./Messages/Messages";

const Dialogues = (props) => {
    return (
        <div className={styles.Dialogues}>
            <div className={styles.contacts}>
                <Search name="contact_searching" id="contact_searching"/>
                <Contact id="1"/>
                <Contact id="2"/>
                <Contact id="3" username="Kirill Bohateriov" user_message="KEK!!=D" />
                <Contact id="4" username="Kardan Wislouhij"/>
                <Contact id="5" user_message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis distinctio perferendis accusamus cupiditate
                        necessitatibus velit! Fugiat officia explicabo, quia quo
                        magnam non saepe! Dicta facilis debitis quae, voluptate
                        aliquam veritatis?"/>
            </div>
            <div className={styles.messages}>
                <ChatInfo user_name="user_name" last_online="last_online"/>
                <Search name="message_searching" id="message_searching"/>
                <Messages id={props.id}/>
            </div>
        </div>
    )
}

export default Dialogues