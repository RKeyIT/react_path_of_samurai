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
}

const profileReducer = (state = initialState, action) => {
    const POST_SENDING = 'POST_SENDING'
    const PROFILE_textAreaUpdate = 'PROFILE_textAreaUpdate'

    switch (action.type) {
        case POST_SENDING:
            return {
                ...state,
                DATA_Posts: [...state.DATA_Posts,
                    {
                        type: POST_SENDING,
                        idPost: state.DATA_Posts.length,
                        idUser: 'HERE_WILL_BE_USER_ID',
                        username: 'HERE_WILL_BE_USER_NAME',
                        message: state.textAreaText,
                        likes: 0, //default
                        comments: 0, //default
                        viewsCount: 0, //default
                    }
                ],
                textAreaText: ''
            }
            // stateCopy.textAreaText = ''
        case PROFILE_textAreaUpdate:
            return { ...state,
                textAreaText: action.text
            }
        default:
            return state
    }
}

export const createPostActionCreator = () => ({type: 'POST_SENDING'})
export const PROFILE_textAreaUpdateActionCreator = (text) => ({
    type: 'PROFILE_textAreaUpdate',
    text: text,
})

export default profileReducer;