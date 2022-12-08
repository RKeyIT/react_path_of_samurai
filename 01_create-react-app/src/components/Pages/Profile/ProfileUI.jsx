import React from 'react';
import styles from './Profile.module.css';
import Statusbar from "./Statusbar/Statusbar";
import UserPage from "./UserPage/UserPage";
import UserWallLogic from "./UserWall/UserWallLogic";


const ProfileUI = (props) => {
    return (
        <div className={styles.Profile}>
            <Statusbar />
            <UserPage />
            <UserWallLogic  />
        </div>
    );
};

export default ProfileUI;
