import React from 'react';
import UserPost from '../UserPost/UserPost';
import styles from './UserWall.module.css';

const UserWall = () => {
    return (
        <div className={styles.posts}>
            my posts
            <div className={styles.newPost}>
                <textarea name='' id='' cols='60' rows='5'></textarea>
                <button>new post</button>
            </div>
            <div className={styles.posted}>
                posted-posts
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <div className={styles.item}>Post 2</div>
            </div>
        </div>
    );
};

export default UserWall;
