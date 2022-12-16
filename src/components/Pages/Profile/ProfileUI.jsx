import React from 'react';
import styles from './Profile.module.css';
// import ProfileStatus from "./ProfileStatus/ProfileStatus";
// import UserPage from "./UserPage/UserPage";
import UserWallLogic from "./UserWall/UserWallLogic";
import UserInfoUI from "./UserInfo/UserInfoUI";
import UserActionsLogic from "./UserActions/UserActionsLogic";


const ProfileUI = (props) => {
    return (
        <div className={styles.Profile}>
            <div className={styles.ProfileContainer}>
                <UserInfoUI />
                <UserActionsLogic />
            </div>
            <UserWallLogic  />
        </div>
    );
};

export default ProfileUI;
