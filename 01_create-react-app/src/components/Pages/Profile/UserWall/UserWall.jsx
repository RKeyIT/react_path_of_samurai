import React from 'react';
import UserPost from '../UserPost/UserPost';
import styles from './UserWall.module.css';

const UserWall = (props) => {
    const newPostArea = React.createRef()

    const posts =
        props.PostData.map(el => <UserPost name={el.username} message={el.message}
                                           likes={el.likes} comments={el.comments}/>)

    const createPost = () => {
        let action = {type: 'POST_PUBLICATION'}
        props.dispatch(action)
    }

    const textAreaValue = () => {
        let action = {type: 'textAreaText'}
        return props.dispatch(action)
    }
    const textAreaUpdate = () => {
        let action = {
            type: 'textAreaUpdate',
            text: newPostArea.current.value,
        }
        props.dispatch(action)
    }

    return (
        <div className={styles.posts}>
            my posts
            <div className={styles.newPost}>
                <textarea name='' id='' cols='60' rows='5'
                          ref={newPostArea}
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
