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
        sendPublication: (text) => {
            let dataArr = state.profilePage.PostData

            dataArr.push({
                id: dataArr.length,
                userid: 999,
                username: 'METHOD_TEST',
                message: text,
                likes: 0,
                comments: 0,
            })

            console.log(dataArr)
        },
        // deletePublication: (props) => { },
        // likePublication: (props) => { },
        // commentPublication: (props) => { },
        // reportPublication: (props) => { },
    }

}

export default state;