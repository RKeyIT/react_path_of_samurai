import React from 'react';
import UserPost from '../UserPost/UserPost';
import styles from './UserWall.module.css';
import {
    createPostActionCreator, PROFILE_textAreaUpdateActionCreator, PROFILE_textAreaValueActionCreator,
} from "../../../../redux/store";

const UserWall = (props) => {
    const reactTextAreaLink = React.createRef()
    const posts =
        props.DATA_Posts.map(el => <UserPost name={el.username} message={el.message}
                                           likes={el.likes} comments={el.comments}/>)

    const createPost = () => props.dispatch(createPostActionCreator())
    const textAreaValue = () => props.dispatch(PROFILE_textAreaValueActionCreator())
    const textAreaUpdate = () => props.dispatch(PROFILE_textAreaUpdateActionCreator(reactTextAreaLink.current.value))

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
