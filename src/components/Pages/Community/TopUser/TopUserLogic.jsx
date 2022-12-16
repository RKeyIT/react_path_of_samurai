import TopUserUI from "./TopUserUI";
import {connect} from "react-redux";
import {subscribeUserActionCreator} from "../../../../redux/community-reducer";

const mapStateToProps = (state) => {
    return {
        state: state.communityPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        subscr: (id) => {
            return dispatch(subscribeUserActionCreator(id))
        },
    }
}

const TopUserLogic = connect(mapStateToProps, mapDispatchToProps)(TopUserUI)
export default TopUserLogic