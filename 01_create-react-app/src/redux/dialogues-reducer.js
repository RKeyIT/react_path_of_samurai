const dialoguesReducer = (state, action) => {
    const MESSAGE_SENDING = 'MESSAGE_SENDING'
    const DIALOGUES_textAreaText = 'DIALOGUES_textAreaText'
    const DIALOGUES_textAreaUpdate = 'DIALOGUES_textAreaUpdate'

    // 2. message sending
    if (action.type === MESSAGE_SENDING) {
        let dataArr = state.DATA_Messages
        dataArr.push({
            type: MESSAGE_SENDING,
            idMessage: dataArr.length,
            idUser: 999,
            username: 'HERE_WILL_BE_USER_NAME',
            message: state.textAreaText,
        })
    }
    // textarea
    if (action.type === DIALOGUES_textAreaText) {
        return state.textAreaText
    }
    // textarea onChange = textAreaUpdate
    if (action.type === DIALOGUES_textAreaUpdate) {
        return state.textAreaOnChange(action.text)
    }

    state.textAreaText = ''
    return state
}

export default dialoguesReducer;