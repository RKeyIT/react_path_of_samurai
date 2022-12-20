import React from "react";
import styles from './TopUser.module.css'
import Button from "../../../Action/Button/Button";
import axios from "axios";
// import unknownUserAvatar from '../../../../img/unknown_avatar.jpg';

const TopUserUI = (props) => {
    let indicator = 0;
    if(indicator === 0) {
        indicator = 1;
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                    props.setUsers(response.data.items)
                }
            )
    }
    if(props.users.length !== 0) {props.users.length = 8}
    return props.users.map(el => {
        return (
            <div  className={styles.user}>
                <div>
                    {`Name: ${el.name} ${el.name}`}
                </div>
                <div>{`id: ${el.id}`}</div>
                <div>
                    <Button text={el.followed ? 'unsubscribe' : 'subscribe'}
                            callback={() => props.subscr(el.id)}/>
                </div>
            </div>
        )
    });
}

export default TopUserUI