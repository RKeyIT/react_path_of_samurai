import React from "react";
import DialoguesUI from "./DialoguesUI";
import {DIALOGUES_textAreaUpdateActionCreator, sendMessageActionCreator} from "../../../redux/dialogues-reducer";

const DialoguesLogic = (props) => {

    const state = props.store.getState().dialoguesPage
    const sendMessage = () => props.store.dispatch(sendMessageActionCreator())
    const textAreaUpdate = (text) => props.store.dispatch(DIALOGUES_textAreaUpdateActionCreator(text))

    return (
        <div>
            <DialoguesUI state={state} sendMessage={sendMessage} textAreaUpdate={textAreaUpdate}/>
        </div>
    )
}

export default DialoguesLogic