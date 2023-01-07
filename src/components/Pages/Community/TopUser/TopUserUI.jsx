import React from "react";
import styles from "./TopUser.module.css";
import {Link} from "react-router-dom";
import {API} from "../../../../api/api";

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
                                <button
                                    disabled={props.buttonBlock.some(id => id === el.id)}
                                    onClick={() => {
                                        props.toggleButton(el.id);
                                        el.followed
                                            ?
                                            API.deleteSubscription(el.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.subscribeUser(el.id)
                                                }
                                                props.toggleButton(el.id);
                                            })
                                            :
                                            API.addSubscription(el.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.subscribeUser(el.id)
                                                }
                                                props.toggleButton(el.id);
                                            })
                                    }}
                                >
                                    {el.followed ? 'unsubscribe' : 'subscribe'}
                                </button>
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