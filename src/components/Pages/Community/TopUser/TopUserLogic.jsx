import {connect} from "react-redux";
import {
    getUsersThunk, setCurrentPage,
    subscribeUser, toggleButton,
    addSubscription, deleteSubscription
} from "../../../../redux/community-reducer";
import React from "react";
import TopUserUI from "./TopUserUI";
import Preloader from "../../../Action/Preloader/Preloader";


class TopUserClass extends React.Component {

    toggleButton = () => {
        return this.props.toggleButton()
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    pageChanger = pageNumber => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
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
                addSubscription={this.props.addSubscription}
                deleteSubscription={this.props.deleteSubscription}
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
    {subscribeUser, setCurrentPage, toggleButton,
        getUsersThunk, addSubscription, deleteSubscription}
)(TopUserClass)
export default TopUserLogic