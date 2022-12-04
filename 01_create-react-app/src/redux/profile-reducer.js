const profileReducer = (state, action) => {
    const POST_PUBLICATION = 'POST_PUBLICATION'
    const PROFILE_textAreaText = 'PROFILE_textAreaText'
    const PROFILE_textAreaUpdate = 'PROFILE_textAreaUpdate'

    // 1. post publication
    if (action.type === POST_PUBLICATION) {
        // return state.textAreaText
        let dataArr = state.DATA_Posts
        dataArr.push({
            type: POST_PUBLICATION,
            idPost: dataArr.length,
            idUser: 'HERE_WILL_BE_USER_ID',
            username: 'HERE_WILL_BE_USER_NAME',
            message: state.textAreaText,
            likes: 0, //default
            comments: 0, //default
            viewsCount: 0, //default
        })
    }
    // textarea
    if (action.type === PROFILE_textAreaText) {
        return state.textAreaText
    }
    // textarea onChange = textAreaUpdate
    if (action.type === PROFILE_textAreaUpdate) {
        return state.textAreaOnChange(action.text)
    }

    state.textAreaText = ''
    return state
}

export default profileReducer;