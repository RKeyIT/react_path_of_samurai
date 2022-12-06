import React from "react";
import styles from "./Dialogues.module.css"
import Contact from "./Contact/Contact";
import Search from "../../Action/Search/Search";
import ChatInfo from "./ChatInfo/ChatInfo";
import Button from "../../Action/Button/Button";
import MessagesLogic from "./Messages/MessagesLogic";

const DialoguesUI = (props) => {
    const contacts =
        props.state.DATA_Contacts.map(el => <Contact id={el.id} username={el.username}/>)

    const reactTextAreaLink = React.createRef()

    const sendMessage = () => props.sendMessage()
    const textAreaUpdate = () => props.textAreaUpdate(reactTextAreaLink.current.value)
    const textAreaValue = () => props.state.textAreaText

    return (
        <div className={styles.Dialogues}>
            <div className={styles.contacts}>
                <Search name="contact_searching" id="contact_searching"/>
                {contacts}
            </div>
            <div className={styles.messages}>
                <ChatInfo user_name="user_name" last_online="last_online"/>
                <Search name="message_searching" id="message_searching"/>
                <MessagesLogic id={props.id} MessagesData={props.state.DATA_Messages}/>
                <textarea
                    id='' name=''
                    ref={reactTextAreaLink}
                    value={textAreaValue()}
                    onChange={textAreaUpdate}
                    placeholder={'Enter something...'}
                />
                <Button callback={sendMessage} text='Отправить сообщение'/>
            </div>
        </div>
    )
}

export default DialoguesUI