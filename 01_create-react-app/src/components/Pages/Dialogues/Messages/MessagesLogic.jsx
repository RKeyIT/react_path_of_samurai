import React from "react";
import Inbox from "../Inbox/Inbox";
import Outbox from "../Outbox/Outbox";
import MessagesUI from "./MessagesUI";

const MessagesLogic = (props) => {

    const isFromCurrentUser = ownerId => {
        //pseudocode
        return ownerId === "000000" // ? true : false - выражение итак вернёт тру или фолс!
    //    '000000' is ID of user who opened messages from his account
    //    That's need for different (My/Not my) showing messages
    }

    const messagesHistory =
        props.MessagesData.map(el => isFromCurrentUser(el) ? <Outbox message={el.message} /> : <Inbox message={el.message} />)

    return (
        <div>
            <MessagesUI messagesHistory={messagesHistory}/>
        </div>
    )
}

// let mapStateToProps = (state) => {
//     return {
//
//     }
// }
// let mapDispatchToProps = (dispatch) => {
//     return {
//
//     }
// }
// const MessagesLogic = connect(mapStateToProps, mapDispatchToProps)(MessagesUI);

export default MessagesLogic