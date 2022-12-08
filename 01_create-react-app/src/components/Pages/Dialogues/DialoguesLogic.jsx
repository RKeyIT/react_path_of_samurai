import React from "react";
import DialoguesUI from "./DialoguesUI";
import {DIALOGUES_textAreaUpdateActionCreator, sendMessageActionCreator} from "../../../redux/dialogues-reducer";
import StoreContext from "../../../StoreContext";

const DialoguesLogic = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialoguesPage
                    const sendMessage = () => store.dispatch(sendMessageActionCreator())
                    const textAreaUpdate = (text) => store.dispatch(DIALOGUES_textAreaUpdateActionCreator(text))

                    return (
                        <div>
                            <DialoguesUI state={state} sendMessage={sendMessage} textAreaUpdate={textAreaUpdate}/>
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialoguesLogic