import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import navbarReducer from "./navbar-reducer";
import communityReducer from "./community-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    navbarData: navbarReducer,
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    communityPage: communityReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store