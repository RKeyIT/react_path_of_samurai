import {connect} from "react-redux";
import {
    setCurrentPage, setTotalUsersCount,
    setUsers,
    subscribeUser, toggleFetching
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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
            .then(response => {
                this.toggleFetching();
                this.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    pageChanger = pageNumber => {
        this.toggleFetching();
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
            .then(response => {
                this.toggleFetching();
                this.setUsers(response.data.items)
            });
    }


    render() {
        return <>
            <TopUserUI
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageChanger={this.pageChanger}
                subscribeUser={this.props.subscribeUser}
            />
            {this.props.isFetching ? <Preloader/> : null}
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

const TopUserLogic = connect(mapStateToProps,
    {subscribeUser, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching}
)(TopUserClass)
export default TopUserLogic