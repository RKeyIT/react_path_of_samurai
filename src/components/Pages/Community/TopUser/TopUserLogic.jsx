import {connect} from "react-redux";
import {
    setCurrentPage, setTotalUsersCount,
    setUsers,
    subscribeUser, toggleButton, toggleFetching
} from "../../../../redux/community-reducer";
import React from "react";
import TopUserUI from "./TopUserUI";
import Preloader from "../../../Action/Preloader/Preloader";
import { API } from "../../../../api/api";


class TopUserClass extends React.Component {

    setUsers(users) {
        return this.props.setUsers(users)
    }

    toggleFetching = () => {
        return this.props.toggleFetching()
    }

    toggleButton = () => {
        return this.props.toggleButton()
    }

    componentDidMount() {
        this.toggleFetching();
        API.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.toggleFetching();
                this.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    pageChanger = pageNumber => {
        this.toggleFetching();
        this.props.setCurrentPage(pageNumber)
        API.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.toggleFetching();
                this.setUsers(data.items)
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
                buttonBlock={this.props.buttonBlock}
                toggleButton={this.props.toggleButton}
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
        buttonBlock: state.communityPage.buttonBlock,
    }
}

const TopUserLogic = connect(mapStateToProps,
    {subscribeUser, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching, toggleButton}
)(TopUserClass)
export default TopUserLogic