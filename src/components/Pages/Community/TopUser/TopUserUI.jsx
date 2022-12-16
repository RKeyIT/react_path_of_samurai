import React from "react";
import styles from './TopUser.module.css'

const TopUserUI = (props) => {
    let users = props.state.communityPage.DATA_Users.map(el => {
        return (
            <div key={el.id} className={styles.user}>
                <div>
                    {`Name: ${el.firstName} ${el.secondName}`}
                </div>
                <div>{`id: ${el.id}`}</div>
                <div>
                    <button onClick={ () => {props.subscr(el.id)}}>
                        {el.subscribed ? 'unsubscribe' : 'subscribe'}
                    </button>
                </div>
            </div>
            )
    })
    return users
}

export default TopUserUI