const initialState = {
    // Big users array replaced to bottom
    DATA_Users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}


const communityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_ACTION:
            return {
                ...state,
                DATA_Users: state.DATA_Users.map((el, index) => {
                    return el.id === action.id
                        ? {
                            ...el,
                            // subscribed: !state.DATA_Users[index].subscribed,
                            followed: !state.DATA_Users[index].followed,
                        }
                        : el;
                })
            }
        case SET_USERS:
            return {
                ...state,
                DATA_Users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state
    }
}

const TOGGLE_FETCHING = "TOGGLE_FETCHING"
export const toggleFetching = () => ({type: TOGGLE_FETCHING})

const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const setTotalUsersCount = totalCount => ({type: SET_TOTAL_USERS_COUNT, totalCount})

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})

const SUBSCRIBE_ACTION = "SUBSCRIBE_ACTION"
export const subscribeUser = id => ({type: SUBSCRIBE_ACTION, id})

const SET_USERS = "SET_USERS"
export const setUsers = users => ({type: SET_USERS, users})

export default communityReducer;
// DATA_Users: [
//     {
//         id: 0,
//         subscribed: true,
//         firstName: 'Adam',
//         secondName: 'Kioning',
//         status: 'TOP CONTENT MAKER',
//         statistics: {
//             examination: 4,
//             groupTeaching: 5.7,
//             personalTeaching: 2,
//             scientist: 0.9,
//             champion: 0.5,
//             student: 0.1,
//             contentMaking: 10,
//             publisher: 0.6,
//         },
//         achievements: [
//             'Patient ZERO',
//         ],
//     },
//     {
//         id: 1,
//         subscribed: false,
//         firstName: 'Olympus',
//         secondName: 'PRO',
//         status: 'TOP CHAMPION',
//         statistics: {
//             examination: 0.1,
//             groupTeaching: 0.1,
//             personalTeaching: 0.1,
//             scientist: 5,
//             champion: 10,
//             student: 7.3,
//             contentMaking: 1,
//             publisher: 0.1,
//         },
//         achievements: [],
//     },
//     {
//         id: 2,
//         subscribed: true,
//         firstName: 'Mike',
//         secondName: 'Perfect',
//         status: 'TOP EXAMINATOR',
//         statistics: {
//             examination: 10,
//             groupTeaching: 9.5,
//             personalTeaching: 3,
//             scientist: 7,
//             champion: 0.1,
//             student: 0.1,
//             contentMaking: 6,
//             publisher: 0.1,
//         },
//         achievements: [],
//     },
//     {
//         id: 3,
//         subscribed: false,
//         firstName: 'Samantha',
//         secondName: 'Book',
//         status: 'TOP STUDENT',
//         statistics: {
//             examination: 0.1,
//             groupTeaching: 0.1,
//             personalTeaching: 2.5,
//             scientist: 3,
//             champion: 6.3,
//             student: 10,
//             contentMaking: 0.5,
//             publisher: 0.1,
//         },
//         achievements: [],
//     },
//     {
//         id: 4,
//         subscribed: false,
//         firstName: 'Patricia',
//         secondName: 'Rainshow',
//         status: 'TOP PUBLISHER',
//         statistics: {
//             examination: 0.1,
//             groupTeaching: 0.1,
//             personalTeaching: 0.1,
//             scientist: 5.4,
//             champion: 0.1,
//             student: 0.1,
//             contentMaking: 8.7,
//             publisher: 9.6,
//         },
//         achievements: [],
//     },
//     {
//         id: 5,
//         subscribed: false,
//         firstName: 'Spencer',
//         secondName: 'Mentor',
//         status: 'TOP MENTOR',
//         statistics: {
//             examination: 2,
//             groupTeaching: 2.5,
//             personalTeaching: 9.7,
//             scientist: 3.3,
//             champion: 0.1,
//             student: 0.1,
//             contentMaking: 4,
//             publisher: 0.1,
//         },
//         achievements: [],
//     },
//     {
//         id: 6,
//         subscribed: true,
//         firstName: 'Alicia',
//         secondName: 'Brown',
//         status: 'TOP TEACHER',
//         statistics: {
//             examination: 4.2,
//             groupTeaching: 9.9,
//             personalTeaching: 8.7,
//             scientist: 3.3,
//             champion: 0.1,
//             student: 0.1,
//             contentMaking: 4.3,
//             publisher: 0.1,
//         },
//         achievements: [],
//     },
//     {
//         id: 7,
//         subscribed: false,
//         firstName: 'Professor',
//         secondName: 'McGonagal',
//         status: 'TOP SCIENTIST',
//         statistics: {
//             examination: 7.3,
//             groupTeaching: 9,
//             personalTeaching: 9,
//             scientist: 10,
//             champion: 0.1,
//             student: 0.1,
//             contentMaking: 2,
//             publisher: 0.1,
//         },
//         achievements: [],
//     },
// ]
