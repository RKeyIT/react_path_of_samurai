import React from 'react';
import UserPost from '../UserPost/UserPost';
import styles from './UserWall.module.css';

const UserWall = () => {

    const postData = [
        {id: 0, username: 'PATIENT_ZERO', message: 'What IS your name?!', likes: 0, comments: 1},
        {id: '1', username: 'Alex Beachman', message: 'What ARE you mean?!', likes: 6, comments: 2},
        {id: '2', username: 'Bartosz Czarny', message: 'Where ARE you talking about?!', likes: 520, comments: 34},
    ];

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
                    name={postData[0].username}
                    message={postData[0].message}
                    likes={postData[0].likes}
                    comments={postData[0].comments}
                />
                <UserPost
                    name={postData[1].username}
                    message={postData[1].message}
                    likes={postData[1].likes}
                    comments={postData[1].comments}
                />
                <UserPost
                    name={postData[2].username}
                    message={postData[2].message}
                    likes={postData[2].likes}
                    comments={postData[2].comments}
                />
            </div>
        </div>
    );
};

export default UserWall;
