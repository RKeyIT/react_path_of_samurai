import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import styles from './Navbar.module.css';
import Friend from "./Friend/Friend";
import {connect} from "react-redux";


const Navbar = (props) => {
    const friends = props.friends
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.list}>
                <NavbarItem name='Profile' link='/profile'/>
                <NavbarItem name='Dialogues' link='/dialogues'/>
                <NavbarItem name='Community' link='/community'/>
                <NavbarItem name='Settings' link='/settings'/>
            </ul>
            <div className={styles.BlockOfFriends}>
                FRIENDS BLOCK
                <ul className={styles.friends}>
                    {friends.map((el, index) => {
                        return index < 3
                            ? <Friend id={el.id} key={el.id} name={el.name}/>
                            : ''
                    })}


                    {/*СДЕЛАЙ ВЫВОД ТОЛЬКО 3х ДРУЗЕЙ*/}
                    {/*<Friend name='Patient Zero' id='' />*/}
                    {/*<Friend name='Clone of Patient Zero' id='' />*/}
                    {/*<Friend name='KEK aka kek' id='' />*/}
                </ul>
            </div>
        </nav>

    )
};

let mapStateToProps = (state) => {
    return {
        friends: state.navbarData.friends,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const NavbarLogic = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarLogic;
