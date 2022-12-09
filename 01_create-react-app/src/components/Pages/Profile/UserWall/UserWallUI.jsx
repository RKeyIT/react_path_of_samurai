import React from 'react';
import styles from './UserWall.module.css';

const UserWallUI = (props) => {
    const textAreaFieldLink = React.createRef()
    const createPost = () => props.createPost()
    const textAreaUpdate = () => {
        props.textAreaUpdate(textAreaFieldLink.current.value);
        console.log(props.state.textAreaText)
    }
    const textAreaValue = () => props.state.textAreaText

    return (
        <div className={styles.posts}>
            my posts
            <div className={styles.newPost}>
                <textarea name='' id='' cols='60' rows='5'
                          ref={textAreaFieldLink}
                          placeholder={'Enter something...'}
                          value={textAreaValue()}
                          onChange={textAreaUpdate}/>
                <button onClick={createPost}>new post</button>
            </div>
            <div className={styles.posted}>
                {props.posts}
            </div>
        </div>
    );
};

export default UserWallUI;