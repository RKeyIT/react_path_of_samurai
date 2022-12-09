import DialoguesUI from "./DialoguesUI";
import {DIALOGUES_textAreaUpdateActionCreator, sendMessageActionCreator} from "../../../redux/dialogues-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
        textAreaText: state.dialoguesPage.textAreaText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        textAreaUpdate: (text) => dispatch(DIALOGUES_textAreaUpdateActionCreator(text))
    }
}
const DialoguesLogic = connect(mapStateToProps, mapDispatchToProps)(DialoguesUI)

export default DialoguesLogic