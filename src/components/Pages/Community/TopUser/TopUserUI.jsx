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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    componentWillUnmount() {
        this.setUsers([])
    }

    pageChanger = pageNumber => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.setUsers(response.data.items)
            });
    }

    render() {
        let countOfPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= countOfPages; i++) {
            pages.push(i)
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 3 ;
        let curPL = curP + 2;
        let slicedPages = pages.slice( curPF, curPL);



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
            <div>
                { slicedPages.map(e => {
                    return (
                        <span className={this.props.currentPage === e ? styles.currentPage : ''}
                              onClick={ () => this.pageChanger(e) }>{e}</span>
                    )
                })}
            </div>
        </>
    }
}

export default TopUserUI