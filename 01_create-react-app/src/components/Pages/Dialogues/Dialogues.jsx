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
    const contacts =
        ContactsData.map(el => <Contact id={el.id} username={el.username}/>)

    const MessagesData = [
        {id: '0', ownerId: 123423, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                        Corporis distinctio perferendis accusamus cupiditate\n' +
                '                        necessitatibus velit! Fugiat officia explicabo, quia quo\n' +
                '                        magnam non saepe! Dicta facilis debitis quae, voluptate\n' +
                '                        aliquam veritatis?'},
        {id: '1', ownerId: 123423, message: 'NOT_User_NAME'},
        {id: '2', ownerId: 123423, message: 'KEK!!=D'},
        {id: '3', ownerId: 123423, message: 'HERE WAS MESSAGE'},
        {id: '4', ownerId: 123423, message: ''},
    ];

    return (
        <div className={styles.Dialogues}>
            <div className={styles.contacts}>
                <Search name="contact_searching" id="contact_searching"/>
                {contacts}
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