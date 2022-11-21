import React from 'react';
import Statusbar from './Statusbar/Statusbar';
import UserPage from './UserPage/UserPage';
import UserWall from './UserWall/UserWall';
import styles from './Profile.module.css';

const Profile = (props) => {
    // Профиль получает на вход:
    // 1. айди пользователя

    return (
        <div className={styles.Content}>
            <Statusbar id={props.id} />
            <UserPage id={props.id} />
            <UserWall id={props.id} />
        </div>
    );
};

export default Profile;
