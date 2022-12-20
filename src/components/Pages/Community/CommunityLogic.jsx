import {connect} from "react-redux";
import CommunityUI from "./CommunityUI";
// import {setUsersActionCreator} from "../../../redux/community-reducer";


let mapStateToProps = (state) => {
    return {
        state: state.communityPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const CommunityLogic = connect(mapStateToProps, mapDispatchToProps)(CommunityUI)
export default CommunityLogic;