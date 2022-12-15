const initialState = {
    DATA_Contacts: [
        {id: '0', username: 'PATIENT_ZERO'},
        {id: '1', username: 'NOT_User_NAME'},
        {id: '2', username: 'Kirill Bohateriov'},
        {id: '3', username: ''},
        {id: '4', username: 'Kardan Wislouhij'},
    ],
    DATA_Messages: [
        {
            id: '0', ownerId: 123423, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                        Corporis distinctio perferendis accusamus cupiditate\n' +
                '                        necessitatibus velit! Fugiat officia explicabo, quia quo\n' +
                '                        magnam non saepe! Dicta facilis debitis quae, voluptate\n' +
                '                        aliquam veritatis?'
        },
        {id: '1', ownerId: 123423, message: 'NOT_User_NAME'},
        {id: '2', ownerId: 123423, message: 'KEK!!=D'},
        {id: '3', ownerId: 123423, message: 'HERE WAS MESSAGE'},
        {id: '4', ownerId: 123423, message: ''},
    ],
    textAreaText: '',
}

const MESSAGE_SENDING = 'MESSAGE_SENDING'
const DIALOGUES_textAreaUpdate = 'DIALOGUES_textAreaUpdate'

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_SENDING:
            return {
                ...state,
                DATA_Messages: [...state.DATA_Messages,
                    {
                        type: MESSAGE_SENDING,
                        idMessage: state.DATA_Messages.length,
                        idUser: 999,
                        username: 'HERE_WILL_BE_USER_NAME',
                        message: state.textAreaText,
                    }
                ],
                textAreaText: ''
            }
        case DIALOGUES_textAreaUpdate:
            return {...state,
                textAreaText: action.text}
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