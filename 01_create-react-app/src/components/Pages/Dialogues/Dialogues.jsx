import React from "react";
import styles from "./Dialogues.module.css"
import Contact from "./Contact/Contact";
import Search from "../../Action/Search/Search";
import ChatInfo from "./ChatInfo/ChatInfo";
import Messages from "./Messages/Messages";
import Textarea from "../../Action/Textarea/Textarea";
import Button from "../../Action/Button/Button";

const Dialogues = (props) => {
    // Диалоги получает на вход:
    // 1. Список контактов и мапит их в компоненты Contact сразу
    // 2. Списки сообщений и передаёт их в пропсах компоненту Messages

    // Теперь эта дата поступает из index.js - ContactsData, MessagesData
    const contacts =
        props.state.ContactsData.map(el => <Contact id={el.id} username={el.username}/>)

    const reactTextAreaLink = React.createRef()

    // callback for button "send message'
    const sendMessage = () => {
        let text = reactTextAreaLink.current.value
        return alert(text)
    }

    return (
        <div className={styles.Dialogues}>
            <div className={styles.contacts}>
                <Search name="contact_searching" id="contact_searching"/>
                {contacts}
            </div>
            <div className={styles.messages}>
                <ChatInfo user_name="user_name" last_online="last_online"/>
                <Search name="message_searching" id="message_searching"/>
                <Messages id={props.id} MessagesData={props.state.MessagesData}/>
                {/*<Textarea ref={reactTextAreaLink} />*/}
                <textarea ref={reactTextAreaLink}></textarea>
                <Button callback={sendMessage} text='Отправить сообщение'/>
            </div>
        </div>
    )
}

export default Dialogues