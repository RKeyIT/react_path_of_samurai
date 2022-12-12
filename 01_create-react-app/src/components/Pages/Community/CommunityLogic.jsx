import {connect} from "react-redux";
import CommunityUI from "./CommunityUI";
import {setUsersActionCreator, subscribeUserActionCreator} from "../../../redux/community-reducer";

// const isSubscribed = (user) => {
//     return user.subscribed ? 'unsubscribe' : 'subscribe'
// }

let mapStateToProps = (state) => {
    return {
        state: state.communityPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const CommunityLogic = connect(mapStateToProps, mapDispatchToProps)(CommunityUI)
export default CommunityLogic;