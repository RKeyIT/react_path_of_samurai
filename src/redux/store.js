import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import navbarReducer from "./navbar-reducer";

const store = {
    _state: {
        profilePage: {
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
                store._callSubscriber(store.getState());
            },
        },
        dialoguesPage: {
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
            textAreaOnChange(text) {
                this.textAreaText = text;
                store._callSubscriber(store.getState());
            },
        },
        navbarData: {
            friends: [
                {id: 231, name: 'Patient Zero'},
                {id: 232, name: 'Friend of Patient Zero'},
                {id: 233, name: 'KEK aka kek'},
                {id: 234, name: 'TEST_USER'},
                {id: 235, name: 'TEST_USER_2'},
                {id: 236, name: 'TEST_USER_3'},
            ]
        },
    },
    _callSubscriber() {
        // here will be observer
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action)
        this._state.dialoguesPage = navbarReducer(this._state.dialoguesPage, action)

        this._callSubscriber(this.getState())
    },
    // deletePublication: (props) => { },
    // likePublication: (props) => { },
    // commentPublication: (props) => { },
    // reportPublication: (props) => { },
}

window.store = store;

export default store;