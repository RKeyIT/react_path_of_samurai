import TopUserUI from "./TopUserUI";
import {connect} from "react-redux";
import {
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    subscribeUserActionCreator
} from "../../../../redux/community-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.communityPage.DATA_Users,
        pageSize: state.communityPage.pageSize,
        totalUsersCount: state.communityPage.totalUsersCount,
        currentPage: state.communityPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        subscr: (id) => {
            dispatch(subscribeUserActionCreator(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (numberOfPage) => {
            dispatch(setCurrentPageActionCreator(numberOfPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        }
    }
}

const TopUserLogic = connect(mapStateToProps, mapDispatchToProps)(TopUserUI)
export default TopUserLogic