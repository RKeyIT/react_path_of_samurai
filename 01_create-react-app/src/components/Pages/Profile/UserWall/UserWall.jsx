import React from 'react';
import UserPost from '../UserPost/UserPost';
import styles from './UserWall.module.css';

const UserWall = (props) => {
    const newPostArea = React.createRef()

    const posts =
        props.PostData.map(el => <UserPost name={el.username} message={el.message}
                                           likes={el.likes} comments={el.comments}/>)

    const createPost = () => {
        let type = 'post'
        props.sendPublication(type)
    }

    const textAreaUpdate = () => {
        props.textArea.onChange(newPostArea.current.value)
    }

    return (
        <div className={styles.posts}>
            my posts
            <div className={styles.newPost}>
                <textarea name='' id='' cols='60' rows='5'
                          ref={newPostArea}
                          value={props.textArea.text}
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
