import {API} from "../api/api";

const initialState = {
    DATA_Users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    buttonBlock: [],
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
        case TOGGLE_BUTTON:
            return {
                ...state,
                buttonBlock: state.buttonBlock.some(id => id === action.id)
                    ? state.buttonBlock.filter(id => id !== action.id)
                    : [...state.buttonBlock, action.id]
            }
        default:
            return state
    }
}

const TOGGLE_FETCHING = "TOGGLE_FETCHING"
export const toggleFetching = () => ({type: TOGGLE_FETCHING})

const TOGGLE_BUTTON = "TOGGLE_BUTTON"
export const toggleButton = (id) => ({type: TOGGLE_BUTTON, id})

const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const setTotalUsersCount = totalCount => ({type: SET_TOTAL_USERS_COUNT, totalCount})

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})

const SUBSCRIBE_ACTION = "SUBSCRIBE_ACTION"
export const subscribeUser = id => ({type: SUBSCRIBE_ACTION, id})

const SET_USERS = "SET_USERS"
export const setUsers = users => ({type: SET_USERS, users})


// thunk function wrapped by thunk-creator that do many dispatches and async operations into them self
export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleFetching());
    API.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleFetching());
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
}
export const deleteSubscription = id => dispatch => {
    dispatch(toggleButton(id));
    API.deleteSubscription(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(subscribeUser(id))
        }
    })
    dispatch(toggleButton(id));
}
export const addSubscription = id => dispatch => {
    debugger
    dispatch(toggleButton(id));
    API.addSubscription(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(subscribeUser(id))
        }
        dispatch(toggleButton(id));
    })
}

export default communityReducer;