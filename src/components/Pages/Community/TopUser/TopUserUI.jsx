import React from "react";
import styles from "./TopUser.module.css";
import Button from "../../../Action/Button/Button";
import {Link} from "react-router-dom";
import axios from "axios";

// TODO: The first line of users is TOP users of platform by one of skills


const TopUserUI = (props) => {
    let countOfPages = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= countOfPages; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 3;
    let curPL = curP + 2;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <>
            {
                props.users.map(el => {
                    return (
                        <div className={styles.user}
                             key={el.id}
                        >
                            <Link to={'/profile/' + el.id} className={styles.avatarContainer}>
                                <img className={styles.avatar} src={el.photos.large} alt="no avatar"/>
                            </Link>
                            <div>
                                {el.name}
                            </div>
                            <div>{el.id}</div>
                            <div>
                                <Button text={el.followed ? 'unsubscribe' : 'subscribe'}
                                        callback={() => {
                                            el.followed
                                                ?
                                                axios
                                                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                                        {
                                                            withCredentials: true,
                                                            headers: {
                                                                "API-KEY": "a5a30551-a391-47c5-bb3f-e86cddddc51a"
                                                            }
                                                        }
                                                    )
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.subscribeUser(el.id)
                                                        }
                                                    })
                                                :
                                                axios
                                                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                                        null, {
                                                            withCredentials: true,
                                                            headers: {
                                                                "API-KEY": "a5a30551-a391-47c5-bb3f-e86cddddc51a"
                                                            }
                                                        }
                                                    )
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.subscribeUser(el.id)
                                                        }
                                                    });
                                        }}/>
                            </div>
                        </div>
                    )

                })
            }
            <div>
                {slicedPages.map(e => {
                    return (
                        <span key={e} className={props.currentPage === e ? styles.currentPage : ''}
                              onClick={() => props.pageChanger(e)}>{e}</span>
                    )
                })}
            </div>
        </>
    )
}

export default TopUserUI