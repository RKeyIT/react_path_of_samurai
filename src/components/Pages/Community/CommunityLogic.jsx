import {connect} from "react-redux";
import CommunityUI from "./CommunityUI";

let mapStateToProps = (state) => {
    return {
        state: state.communityPage,
    }
}

const CommunityLogic = connect(mapStateToProps, {})(CommunityUI)
export default CommunityLogic;