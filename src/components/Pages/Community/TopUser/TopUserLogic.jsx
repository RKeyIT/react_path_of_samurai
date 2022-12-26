import {connect} from "react-redux";
import {
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    subscribeUserActionCreator
} from "../../../../redux/community-reducer";
import React from "react";
import axios from "axios";
import TopUserUI from "./TopUserUI";


class TopUserClass extends React.Component {

    setUsers(users) {
        return this.props.setUsers(users)
    }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    componentWillUnmount() {
        this.setUsers([])
    }

    pageChanger = pageNumber => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.setUsers(response.data.items)
            });
    }

    // propsForNextComponent = {
    //     totalUsersCount: this.props.totalUsersCount,
    //     pageSize: this.props.pageSize,
    //     currentPage: this.props.currentPage,
    //     users: this.props.users,
    //     pageChanger: this.pageChanger,
    // }

    render() {
        return <TopUserUI
            // props={this.propsForNextComponent}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            pageChanger={this.pageChanger}
            subscribeToUser={this.props.subscribeToUser}
        />
    }
}

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
        subscribeToUser: (id) => {
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

const TopUserLogic = connect(mapStateToProps, mapDispatchToProps)(TopUserClass)
export default TopUserLogic