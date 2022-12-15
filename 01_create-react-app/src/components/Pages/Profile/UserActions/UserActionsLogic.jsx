import UserActionsUI from "./UserActionsUI";
import {createPostActionCreator, PROFILE_textAreaUpdateActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => {
            dispatch(createPostActionCreator())
        },
        textAreaUpdate: (text) => {
            dispatch(PROFILE_textAreaUpdateActionCreator(text))
        },
    }
}

const UserActionsLogic = connect(mapStateToProps, mapDispatchToProps)(UserActionsUI)

export default UserActionsLogic