import {API} from "../api/api";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state
    }
}

const SET_USER_DATA = "SET_USER_DATA"
export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export const checkAuthorisationThunk = () => (dispatch) => {
    API.checkAuthorisation().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login));
        }
    });
}

export default authReducer;
