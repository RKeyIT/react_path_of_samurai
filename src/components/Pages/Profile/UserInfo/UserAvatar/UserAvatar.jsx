import React from 'react'
import styles from './UserAvatar.module.css'

const UserAvatar = (props) => {
    return (
        <div className={styles.AvatarPlace}>
            <img alt="user_avatar" src={props.avatar} />
        </div>
    )
}

export default UserAvatar