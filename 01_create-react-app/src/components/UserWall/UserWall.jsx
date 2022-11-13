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
                <UserPost
                    name='Alex Beachman'
                    message='How are you?'
                    likes='6'
                    comments='0'
                />
                <UserPost
                    name='Bartosz Czarny'
                    message='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis distinctio perferendis accusamus cupiditate
                        necessitatibus velit! Fugiat officia explicabo, quia quo
                        magnam non saepe! Dicta facilis debitis quae, voluptate
                        aliquam veritatis?'
                    likes='34'
                    comments='5'
                />
            </div>
        </div>
    );
};

export default UserWall;
