import React from "react";
import styles from './TopUser.module.css'
import axios from "axios";

const TopUserUI = (props) => {
    let users
    axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            users = response.data.items;
            users = users.map(el => {
                el.firstName = el.name;
                el.secondName = "SECOND_NAME";
                el.subscribed = el.followed;
                el.location = "LOCATION_ERROR"
                

                return (
                    <div key={el.id} className={styles.user}>
                        <div>
                            {`Name: ${el.firstName} ${el.secondName}`}
                        </div>
                        <div>{`id: ${el.id}`}</div>
                        <div>
                            <button onClick={() => {
                                props.subscr(el.id)
                            }}>
                                {el.subscribed ? 'unsubscribe' : 'subscribe'}
                            </button>
                        </div>
                    </div>
                )
            })
            console.log(users)
        });
}

export default TopUserUI