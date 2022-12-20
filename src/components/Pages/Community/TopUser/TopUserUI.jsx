import React from "react";
import styles from './TopUser.module.css'
import Button from "../../../Action/Button/Button";
import axios from "axios";
// import unknownUserAvatar from '../../../../img/unknown_avatar.jpg';

const TopUserUI = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
                {
                    photo: null,
                    location: "unknown",
                    followed: false,
                    name: 'Olympus',
                    id: 0,
                    subscribed: true,
                    firstName: 'Adam',
                    secondName: 'Kioning',
                    status: 'TOP CONTENT MAKER',
                    statistics: {
                        examination: 4,
                        groupTeaching: 5.7,
                        personalTeaching: 2,
                        scientist: 0.9,
                        champion: 0.5,
                        student: 0.1,
                        contentMaking: 10,
                        publisher: 0.6,
                    },
                    achievements: [
                        'Patient ZERO',
                    ],
                },
                {
                    photo: null,
                    location: "unknown",
                    followed: false,
                    name: 'Olympus',
                    id: 1,
                    subscribed: false,
                    firstName: 'Olympus',
                    secondName: 'PRO',
                    status: 'TOP CHAMPION',
                    statistics: {
                        examination: 0.1,
                        groupTeaching: 0.1,
                        personalTeaching: 0.1,
                        scientist: 5,
                        champion: 10,
                        student: 7.3,
                        contentMaking: 1,
                        publisher: 0.1,
                    },
                    achievements: [],
                },
        ])
        // axios
        //     .get("https://social-network.samuraijs.com/api/1.0/users")
        //     .then(response => {
        //             props.setUsers(response.data.items)
        //         }
        //     )
    }
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