import React from 'react';
import styles from './Profile.module.css';
import UserWallLogic from "./UserWall/UserWallLogic";
import UserInfoUI from "./UserInfo/UserInfoUI";
import UserActionsLogic from "./UserActions/UserActionsLogic";
import Preloader from "../../Action/Preloader/Preloader";


const ProfileUI = (props) => {
    if(!props.profile_id) {
        return <Preloader/>
    }

    return (
        <div className={styles.Profile}>
            <div className={styles.ProfileContainer}>
                <UserInfoUI profile_id={props.profile_id}/>
                <UserActionsLogic />
            </div>
            <UserWallLogic  />
        </div>
    );
};

export default ProfileUI;
