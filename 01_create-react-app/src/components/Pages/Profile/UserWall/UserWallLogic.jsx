import React from 'react';
import {
    createPostActionCreator, PROFILE_textAreaUpdateActionCreator,
} from "../../../../redux/profile-reducer";
import UserWallUI from "./UserWallUI";
import UserPost from "../UserPost/UserPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage,
        posts: state.profilePage.DATA_Posts.map(el => <UserPost key={el.id} name={el.username} message={el.message}
                                                    likes={el.likes} comments={el.comments}/>)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => {
            dispatch(createPostActionCreator())
        },
        textAreaUpdate: (text) => {
            dispatch(PROFILE_textAreaUpdateActionCreator(text))
        },
    }
}

const UserWallLogic = connect(mapStateToProps, mapDispatchToProps)(UserWallUI);

export default UserWallLogic;
