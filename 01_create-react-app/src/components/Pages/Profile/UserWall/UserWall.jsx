import React from 'react';
import UserPost from '../UserPost/UserPost';
import styles from './UserWall.module.css';

const UserWall = (props) => {
    const posts =
        props.PostData.map( el => <UserPost name={el.username} message={el.message} likes={el.likes} comments={el.comments} />)


    return (
        <div className={styles.posts}>
            my posts
            <div className={styles.newPost}>
                <textarea name='' id='' cols='60' rows='5'></textarea>
                <button>new post</button>
            </div>
            <div className={styles.posted}>
                {posts}
            </div>
        </div>
    );
};

export default UserWall;
