import renderApp from "../render";

const state = {
    profilePage: {
        PostData: [
            {id: 0, userid: 0, username: 'PATIENT_ZERO', message: 'What IS your name?!', likes: 0, comments: 1},
            {id: 1, userid: 0, username: 'Alex Beachman', message: 'What ARE you mean?!', likes: 6, comments: 2},
            {id: 2, userid: 0, username: 'Bartosz Czarny', message: 'Where ARE you talking about?!', likes: 520, comments: 34},
        ],
    },
    dialoguesPage: {
        ContactsData: [
            {id: '0', username: 'PATIENT_ZERO'},
            {id: '1', username: 'NOT_User_NAME'},
            {id: '2', username: 'Kirill Bohateriov'},
            {id: '3', username: ''},
            {id: '4', username: 'Kardan Wislouhij'},
        ],
        MessagesData: [
            {id: '0', ownerId: 123423, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                    '                        Corporis distinctio perferendis accusamus cupiditate\n' +
                    '                        necessitatibus velit! Fugiat officia explicabo, quia quo\n' +
                    '                        magnam non saepe! Dicta facilis debitis quae, voluptate\n' +
                    '                        aliquam veritatis?'},
            {id: '1', ownerId: 123423, message: 'NOT_User_NAME'},
            {id: '2', ownerId: 123423, message: 'KEK!!=D'},
            {id: '3', ownerId: 123423, message: 'HERE WAS MESSAGE'},
            {id: '4', ownerId: 123423, message: ''},
        ],
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

    actions: {
        // 1. actions with publications
        sendPublication: (type) => {
            // types for entering objects:
            // 1. post
            // 2. message

            if (type === 'post') {
                let dataArr = state.profilePage.PostData
                dataArr.push({
                    type: type,
                    id: dataArr.length,
                    userid: 999,
                    username: 'METHOD_TEST',
                    message: state.actions.textArea.text,
                    likes: 0,
                    comments: 0,
                })
            }
            if (type === 'message') {
                let dataArr = state.dialoguesPage.MessagesData
                dataArr.push({
                    type: type,
                    id: dataArr.length,
                    userid: 999,
                    username: 'METHOD_TEST',
                    message: state.actions.textArea.text,
                })
            }
            state.actions.textArea.text = ''
            renderApp()
        },
        // deletePublication: (props) => { },
        // likePublication: (props) => { },
        // commentPublication: (props) => { },
        // reportPublication: (props) => { },

        // 2. textArea actions
        textArea: {
            text: 'Enter something...',
            onChange: (text) => {
                state.actions.textArea.text = text;
                renderApp();
            },
        }
    }

}

export default state;