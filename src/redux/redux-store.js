import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import navbarReducer from "./navbar-reducer";
import communityReducer from "./community-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
    navbarData: navbarReducer,
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    communityPage: communityReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.state = store.getState()

export default store