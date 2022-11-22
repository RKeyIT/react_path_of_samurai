import React from "react";
import styles from "./Dialogues.module.css"
import Contact from "./Contact/Contact";
import Search from "../../Action/Search/Search";
import ChatInfo from "./ChatInfo/ChatInfo";
import Messages from "./Messages/Messages";

const Dialogues = (props) => {

    const ContactsData = [
        {id: '0', username: 'PATIENT_ZERO'},
        {id: '1', username: 'NOT_User_NAME'},
        {id: '2', username: 'Kirill Bohateriov'},
        {id: '3', username: ''},
        {id: '4', username: 'Kardan Wislouhij'},
    ];

    const MessagesData = [
        {id: '0', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                        Corporis distinctio perferendis accusamus cupiditate\n' +
                '                        necessitatibus velit! Fugiat officia explicabo, quia quo\n' +
                '                        magnam non saepe! Dicta facilis debitis quae, voluptate\n' +
                '                        aliquam veritatis?'},
        {id: '1', message: 'NOT_User_NAME'},
        {id: '2', message: 'KEK!!=D'},
        {id: '3', message: 'HERE WAS MESSAGE'},
        {id: '4', message: ''},
    ];

    return (
        <div className={styles.Dialogues}>
            <div className={styles.contacts}>
                <Search name="contact_searching" id="contact_searching"/>
                <Contact id={ContactsData[0].id} username={ContactsData[0].username}/>
                <Contact id={ContactsData[1].id} username={ContactsData[1].username}/>
                <Contact id={ContactsData[2].id} username={ContactsData[2].username}/>
            </div>
            <div className={styles.messages}>
                <ChatInfo user_name="user_name" last_online="last_online"/>
                <Search name="message_searching" id="message_searching"/>
                <Messages id={props.id} MessagesData={MessagesData}/>
            </div>
        </div>
    )
}

export default Dialogues