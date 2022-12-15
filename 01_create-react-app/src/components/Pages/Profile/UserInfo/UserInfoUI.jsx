import React from 'react'
import styles from './UserInfo.module.css'
import UserAvatar from "./UserAvatar/UserAvatar";
import UserDescription from "./UserDescription/UserDescription";
import UserCard from "./UserCard/UserCard";

const UserInfoUI = () => {
    return (
        <div className={styles.UserInfo}>
            <UserAvatar />
            <UserDescription />
            <UserCard />
        </div>
    )
}

export default UserInfoUI