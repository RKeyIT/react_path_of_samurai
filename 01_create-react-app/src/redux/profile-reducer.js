const initialState = {
    DATA_Posts: [
        {id: 0, userid: 0, username: 'PATIENT_ZERO', message: 'What IS your name?!', likes: 0, comments: 1},
        {id: 1, userid: 0, username: 'Alex Beachman', message: 'What ARE you mean?!', likes: 6, comments: 2},
        {
            id: 2,
            userid: 0,
            username: 'Bartosz Czarny',
            message: 'WHAT ARE you talking about?!',
            likes: 520,
            comments: 34
        },
    ],
    textAreaText: '',
    textAreaOnChange(text) {
        this.textAreaText = text;
    },
}

const profileReducer = (state = initialState, action) => {
    const POST_PUBLICATION = 'POST_PUBLICATION'
    const PROFILE_textAreaUpdate = 'PROFILE_textAreaUpdate'

    // 1. post publication
    switch (action.type) {
        case POST_PUBLICATION:
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
            state.textAreaText = ''
            return state
        case PROFILE_textAreaUpdate:
            state.textAreaOnChange(action.text)
            return state
        default:
            return state
    }
}

export const createPostActionCreator = () => ({type: 'POST_PUBLICATION'})
export const PROFILE_textAreaUpdateActionCreator = (text) => ({
    type: 'PROFILE_textAreaUpdate',
    text: text,
})

export default profileReducer;