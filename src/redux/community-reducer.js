const initialState = {
    communityPage: {
        DATA_Users: [
            {
                id: 0,
                subscribed: true,
                firstName: 'Adam',
                secondName: 'Kioning',
                status: 'TOP CONTENT MAKER',
                statistics: {
                    examination: 4,
                    groupTeaching: 5.7,
                    personalTeaching: 2,
                    scientist: 0.9,
                    champion: 0.5,
                    student: 0.1,
                    contentMaking: 10,
                    publisher: 0.6,
                },
                achievements: [
                    'Patient ZERO',
                ],
            },
            {
                id: 1,
                subscribed: false,
                firstName: 'Olympus',
                secondName: 'PRO',
                status: 'TOP CHAMPION',
                statistics: {
                    examination: 0.1,
                    groupTeaching: 0.1,
                    personalTeaching: 0.1,
                    scientist: 5,
                    champion: 10,
                    student: 7.3,
                    contentMaking: 1,
                    publisher: 0.1,
                },
                achievements: [],
            },
            {
                id: 2,
                subscribed: true,
                firstName: 'Mike',
                secondName: 'Perfect',
                status: 'TOP EXAMINATOR',
                statistics: {
                    examination: 10,
                    groupTeaching: 9.5,
                    personalTeaching: 3,
                    scientist: 7,
                    champion: 0.1,
                    student: 0.1,
                    contentMaking: 6,
                    publisher: 0.1,
                },
                achievements: [],
            },
            {
                id: 3,
                subscribed: false,
                firstName: 'Samantha',
                secondName: 'Book',
                status: 'TOP STUDENT',
                statistics: {
                    examination: 0.1,
                    groupTeaching: 0.1,
                    personalTeaching: 2.5,
                    scientist: 3,
                    champion: 6.3,
                    student: 10,
                    contentMaking: 0.5,
                    publisher: 0.1,
                },
                achievements: [],
            },
            {
                id: 4,
                subscribed: false,
                firstName: 'Patricia',
                secondName: 'Rainshow',
                status: 'TOP PUBLISHER',
                statistics: {
                    examination: 0.1,
                    groupTeaching: 0.1,
                    personalTeaching: 0.1,
                    scientist: 5.4,
                    champion: 0.1,
                    student: 0.1,
                    contentMaking: 8.7,
                    publisher: 9.6,
                },
                achievements: [],
            },
            {
                id: 5,
                subscribed: false,
                firstName: 'Spencer',
                secondName: 'Mentor',
                status: 'TOP MENTOR',
                statistics: {
                    examination: 2,
                    groupTeaching: 2.5,
                    personalTeaching: 9.7,
                    scientist: 3.3,
                    champion: 0.1,
                    student: 0.1,
                    contentMaking: 4,
                    publisher: 0.1,
                },
                achievements: [],
            },
            {
                id: 6,
                subscribed: true,
                firstName: 'Alicia',
                secondName: 'Brown',
                status: 'TOP TEACHER',
                statistics: {
                    examination: 4.2,
                    groupTeaching: 9.9,
                    personalTeaching: 8.7,
                    scientist: 3.3,
                    champion: 0.1,
                    student: 0.1,
                    contentMaking: 4.3,
                    publisher: 0.1,
                },
                achievements: [],
            },
            {
                id: 7,
                subscribed: false,
                firstName: 'Professor',
                secondName: 'McGonagal',
                status: 'TOP SCIENTIST',
                statistics: {
                    examination: 7.3,
                    groupTeaching: 9,
                    personalTeaching: 9,
                    scientist: 10,
                    champion: 0.1,
                    student: 0.1,
                    contentMaking: 2,
                    publisher: 0.1,
                },
                achievements: [],
            },
        ]
    }
}


const communityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_ACTION:
            return {
                ...state,
                communityPage: {
                    ...state.communityPage,
                    DATA_Users: state.communityPage.DATA_Users.map((el, index) => {
                        // console.log(el, index);
                        return el.id === action.id
                            ? {...el, subscribed: !state.communityPage.DATA_Users[index].subscribed}
                            : el;
                        // if(el.id === action.id) {
                        //     return {...el, subscribed: !state.communityPage.DATA_Users[index].subscribed}
                        // }
                        // return el
                    })
                }
            }
        // return {     --------WRONG WAY------
        //     ...state,
        //     communityPage: { ...state.communityPage },
        //     DATA_Users: [...state.communityPage.DATA_Users],
        //     user: {...state.communityPage.DATA_Users[0]},
        //     subscribed: !state.communityPage.DATA_Users[0].subscribed,
        // }    --------WRONG WAY------
        case SET_USERS:
            return {
                ...state,
                communityPage: {
                    ...state.communityPage.DATA_Users,
                    DATA_Users: [...state.communityPage.DATA_Users, ...action.users]
                }
            }
        default:
            return state
    }
}

const SUBSCRIBE_ACTION = "SUBSCRIBE_ACTION"
export const subscribeUserActionCreator = (id) => {
    return {
        type: "SUBSCRIBE_ACTION",
        id: id,
    }
}
const SET_USERS = "SET_USERS"
export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}
// const FOLLOW_ACTION = "FOLLOW_ACTION"
// export const followActionCreator = () => {
//     return {type: FOLLOW_ACTION}
// }
// const UNFOLLOW_ACTION = "UNFOLLOW_ACTION"
// export const unFollowActionCreator = () => {
//     return {type: UNFOLLOW_ACTION}
// }

export default communityReducer;