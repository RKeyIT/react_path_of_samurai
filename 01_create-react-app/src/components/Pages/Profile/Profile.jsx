import React from 'react';
import Statusbar from './Statusbar/Statusbar';
import UserPage from './UserPage/UserPage';
import UserWall from './UserWall/UserWall';
import styles from './Profile.module.css';

const Profile = (props) => {
    // Профиль получает на вход:
    // 1. айди пользователя
    let id = props.id

    return (
        <div className={styles.Content}>
            <Statusbar id={id} />
            <UserPage id={id} />
            <UserWall id={id} />
        </div>
    );
};

export default Profile;
