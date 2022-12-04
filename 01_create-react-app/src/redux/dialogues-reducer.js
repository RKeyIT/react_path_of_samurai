const dialoguesReducer = (state, action) => {
    const MESSAGE_SENDING = 'MESSAGE_SENDING'
    const DIALOGUES_textAreaUpdate = 'DIALOGUES_textAreaUpdate'

    // 2. message sending
    switch (action.type) {
        case MESSAGE_SENDING:
            let dataArr = state.DATA_Messages
            dataArr.push({
                type: MESSAGE_SENDING,
                idMessage: dataArr.length,
                idUser: 999,
                username: 'HERE_WILL_BE_USER_NAME',
                message: state.textAreaText,
            })
            state.textAreaText = ''
            return state
        case DIALOGUES_textAreaUpdate:
            state.textAreaOnChange(action.text)
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: 'MESSAGE_SENDING'})
export const DIALOGUES_textAreaUpdateActionCreator = (text) => ({
    type: 'DIALOGUES_textAreaUpdate',
    text: text,
})

export default dialoguesReducer;