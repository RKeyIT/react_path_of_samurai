import React from 'react';
import Statusbar from './Statusbar/Statusbar';
import UserPage from './UserPage/UserPage';
import UserWall from './UserWall/UserWall';
import styles from './Profile.module.css';

const Profile = (props) => {
    // Профиль получает на вход:
    // 1. айди пользователя
    // 2. посты на стене
    let id = props.id
    return (
        <div className={styles.Profile}>
            <Statusbar id={id} />
            <UserPage id={id} />
            <UserWall
                id={id}
                DATA_Posts={props.state.DATA_Posts}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
