import React from 'react';

import styles from './UserPost.module.css';

const UserPost = () => {
    return (
        <div className={styles.post}>
            <div className={styles.post_data}>
                <div className={styles.avatar}></div>
                <div className={styles.content}>
                    <div className={styles.name}>USER_NANE</div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis distinctio perferendis accusamus cupiditate
                        necessitatibus velit! Fugiat officia explicabo, quia quo
                        magnam non saepe! Dicta facilis debitis quae, voluptate
                        aliquam veritatis?
                    </div>
                </div>
            </div>
            <div className={styles.post_options}>
                <div className={styles.like}>Like</div>
                <div className={styles.comment}>Comments</div>
                <div className={styles.options}>Options</div>
            </div>
        </div>
    );
};

export default UserPost;
