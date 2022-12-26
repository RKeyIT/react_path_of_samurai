import React from "react";
import styles from './TopUser.module.css'
import Button from "../../../Action/Button/Button";
import axios from "axios";
// import unknownUserAvatar from '../../../../img/unknown_avatar.jpg';

class TopUserUI extends React.Component {

    setUsers(users) {
        return this.props.setUsers(users)
    }

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.setUsers(response.data.items)
            });
    }

    componentWillUnmount() {
        this.setUsers([])
    }

    render() {
        return <>
            {
                this.props.users.map(el => {
                    return <div className={styles.user} key={el.id}>
                        <div>
                            {`Name: ${el.name} ${el.name}`}
                        </div>
                        <div>{`id: ${el.id}`}</div>
                        <div>
                            <Button text={el.followed ? 'unsubscribe' : 'subscribe'}
                                    callback={() => this.props.subscr(el.id)}/>
                        </div>
                    </div>
                })
            }
        </>
    }
}

export default TopUserUI