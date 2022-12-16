import React from 'react';
import styles from './UserWall.module.css';

const UserWallUI = (props) => {

    return (
        <div className={styles.posts}>
            <div className={styles.posted}>
                {props.posts}
            </div>
        </div>
    );
};

export default UserWallUI;