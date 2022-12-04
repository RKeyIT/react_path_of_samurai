import React from "react";
import styles from "./Dialogues.module.css"
import Contact from "./Contact/Contact";
import Search from "../../Action/Search/Search";
import ChatInfo from "./ChatInfo/ChatInfo";
import Messages from "./Messages/Messages";
import Button from "../../Action/Button/Button";
import {
    DIALOGUES_textAreaUpdateActionCreator,
    sendMessageActionCreator,
} from "../../../redux/dialogues-reducer";

const Dialogues = (props) => {
    const contacts =
        props.state.DATA_Contacts.map(el => <Contact id={el.id} username={el.username}/>)

    const reactTextAreaLink = React.createRef()

    const sendMessage = () => props.dispatch(sendMessageActionCreator())
    const textAreaUpdate = () => props.dispatch(DIALOGUES_textAreaUpdateActionCreator(reactTextAreaLink.current.value))
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
                <Messages id={props.id} MessagesData={props.state.DATA_Messages}/>
                {/*<Textarea */}
                {/*    ref={reactTextAreaLink}*/}
                {/*    value={props.actions.textArea.text}*/}
                {/*    onChange={textAreaUpdate}*/}
                {/*/>*/}
                <textarea
                    id='' name=''
                    ref={reactTextAreaLink}
                    value={textAreaValue()}
                    onChange={textAreaUpdate}
                    placeholder={'Enter something...'}
                    // onFocus={clearField}
                    // onClick={clearField}
                    // onBlur={fillField}
                />
                <Button callback={sendMessage} text='Отправить сообщение'/>
            </div>
        </div>
    )
}

export default Dialogues