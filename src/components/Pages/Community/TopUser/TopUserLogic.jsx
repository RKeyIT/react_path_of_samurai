import TopUserUI from "./TopUserUI";
import {connect} from "react-redux";
import {setUsersActionCreator, subscribeUserActionCreator} from "../../../../redux/community-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.communityPage.DATA_Users,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        subscr: (id) => {
            return dispatch(subscribeUserActionCreator(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const TopUserLogic = connect(mapStateToProps, mapDispatchToProps)(TopUserUI)
export default TopUserLogic