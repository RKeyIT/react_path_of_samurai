import React from 'react';
import {
    createPostActionCreator, PROFILE_textAreaUpdateActionCreator,
} from "../../../../redux/profile-reducer";
import UserWallUI from "./UserWallUI";
import UserPost from "../UserPost/UserPost";
import StoreContext from "../../../../StoreContext";

const UserWallLogic = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const createPost = () => {
                    store.dispatch(createPostActionCreator())
                }
                const textAreaUpdate = (text) => {
                    store.dispatch(PROFILE_textAreaUpdateActionCreator(text))
                }
                const state = store.getState().profilePage

                const posts = state.DATA_Posts.map(el => <UserPost name={el.username} message={el.message}
                                                                   likes={el.likes} comments={el.comments}/>)
                    return < UserWallUI
                createPost = {createPost}
                textAreaUpdate = {textAreaUpdate}
                state = {state}
                posts = {posts}
                />
            }
        }
        </StoreContext.Consumer>
    );
};

export default UserWallLogic;
