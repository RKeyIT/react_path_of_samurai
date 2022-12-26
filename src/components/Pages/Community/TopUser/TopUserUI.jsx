import React from "react";
import styles from "./TopUser.module.css";
import Button from "../../../Action/Button/Button";


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
                             // key={el.id}
                             key={Math.random() * 10000002}
                        >
                            <div className={styles.avatarContainer}>
                                <img className={styles.avatar} src={el.photos.small} alt="no avatar"/>
                            </div>
                            <div>
                                {el.name}
                            </div>
                            <div>{el.id}</div>
                            <div>
                                <Button text={el.followed ? 'unsubscribe' : 'subscribe'}
                                        callback={() => props.subscribeToUser(el.id)}/>
                            </div>
                        </div>
                    )

                })
            }
            <div>
                {slicedPages.map(e => {
                    return (
                        <span className={props.currentPage === e ? styles.currentPage : ''}
                              onClick={() => props.pageChanger(e)}>{e}</span>
                    )
                })}
            </div>
        </>
    )
}

export default TopUserUI