import React from 'react';
import UserPost from '../UserPost/UserPost';
import styles from './UserWall.module.css';
import {
    createPostActionCreator, PROFILE_textAreaUpdateActionCreator,
} from "../../../../redux/profile-reducer";

const UserWall = (props) => {
    const reactTextAreaLink = React.createRef()
    const posts =
        props.state.DATA_Posts.map(el => <UserPost name={el.username} message={el.message}
                                             likes={el.likes} comments={el.comments}/>)

    const createPost = () => props.dispatch(createPostActionCreator())
    const textAreaUpdate = () => props.dispatch(PROFILE_textAreaUpdateActionCreator(reactTextAreaLink.current.value))
    const textAreaValue = () => props.state.textAreaText

    return (
        <div className={styles.posts}>
            my posts
            <div className={styles.newPost}>
                <textarea name='' id='' cols='60' rows='5'
                          ref={reactTextAreaLink}
                          placeholder={'Enter something...'}
                          value={textAreaValue()}
                          onChange={textAreaUpdate}/>
                <button onClick={createPost}>new post</button>
            </div>
            <div className={styles.posted}>
                {posts}
            </div>
        </div>
    );
};

export default UserWall;
