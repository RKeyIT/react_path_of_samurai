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

    // Теперь эта дата поступает из index.js
    // const postData = [
    //     {id: 0, userid: 0, username: 'PATIENT_ZERO', message: 'What IS your name?!', likes: 0, comments: 1},
    //     {id: 1, userid: 0, username: 'Alex Beachman', message: 'What ARE you mean?!', likes: 6, comments: 2},
    //     {id: 2, userid: 0, username: 'Bartosz Czarny', message: 'Where ARE you talking about?!', likes: 520, comments: 34},
    // ];

    return (
        <div className={styles.Content}>
            <Statusbar id={id} />
            <UserPage id={id} />
            <UserWall id={id} PostData={props.PostData} />
        </div>
    );
};

export default Profile;
