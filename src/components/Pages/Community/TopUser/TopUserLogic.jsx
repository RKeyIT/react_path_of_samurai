import {connect} from "react-redux";
import {
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    subscribeUserActionCreator, toggleFetchingActionCreator
} from "../../../../redux/community-reducer";
import React from "react";
import axios from "axios";
import TopUserUI from "./TopUserUI";
import Preloader from "../../../Action/Preloader/Preloader";


class TopUserClass extends React.Component {

    setUsers(users) {
        return this.props.setUsers(users)
    }

    toggleFetching = () => {
        return this.props.toggleFetching()
    }

    componentDidMount() {
        this.toggleFetching();
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.toggleFetching();
                this.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    componentWillUnmount() {
        this.setUsers([])
    }

    pageChanger = pageNumber => {
        this.toggleFetching();
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.toggleFetching();
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
        return <>

        <TopUserUI
            // props={this.propsForNextComponent}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            pageChanger={this.pageChanger}
            subscribeToUser={this.props.subscribeToUser}
        />
            {this.props.isFetching ? <Preloader /> : null}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.communityPage.DATA_Users,
        pageSize: state.communityPage.pageSize,
        totalUsersCount: state.communityPage.totalUsersCount,
        currentPage: state.communityPage.currentPage,
        isFetching: state.communityPage.isFetching,
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
        },
        toggleFetching: () => {
            dispatch(toggleFetchingActionCreator())
        }
    }
}

const TopUserLogic = connect(mapStateToProps, mapDispatchToProps)(TopUserClass)
export default TopUserLogic