import React from 'react'
import styles from './UserInfo.module.css'
import UserAvatar from "./UserAvatar/UserAvatar";
import UserDescription from "./UserDescription/UserDescription";
import UserCard from "./UserCard/UserCard";

const UserInfoUI = (props) => {
    return (
        <div className={styles.UserInfo}>
            <UserAvatar avatar={props.profile.photos.large}/>
            <UserDescription />
            <UserCard />
        </div>
    )
}

export default UserInfoUI