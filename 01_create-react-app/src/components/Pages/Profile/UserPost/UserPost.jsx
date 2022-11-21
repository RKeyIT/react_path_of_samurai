import React from 'react';
import Like from '../../../Action/Like/Like';
import Comments from '../../../Action/Comments/Comments';
import PostOptions from '../../../Action/PostOptions/PostOptions';
import styles from './UserPost.module.css';

const UserPost = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_data}>
                <div className={styles.avatar}></div>
                <div className={styles.content}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.text}>{props.message}</div>
                </div>
            </div>
            <div className={styles.post_options}>
                <Like amount={props.likes} />
                <Comments comments={props.comments} />
                <PostOptions />
            </div>
        </div>
    );
};

export default UserPost;
