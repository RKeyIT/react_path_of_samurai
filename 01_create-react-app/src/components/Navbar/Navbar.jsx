import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import styles from './Navbar.module.css';
import Friend from "./Friend/Friend";
import StoreContext from "../../StoreContext";

const Navbar = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {

                const friends = store.getState().navbarData.friends
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
                                    if (index < 3) {
                                        return <Friend id={friends.id} name={friends.name}/>
                                    }
                                })}


                                {/*СДЕЛАЙ ВЫВОД ТОЛЬКО 3х ДРУЗЕЙ*/}
                                {/*<Friend name='Patient Zero' id='' />*/}
                                {/*<Friend name='Clone of Patient Zero' id='' />*/}
                                {/*<Friend name='KEK aka kek' id='' />*/}
                            </ul>
                        </div>
                    </nav>
                );
            }
        }

        </StoreContext.Consumer>
    )
};

export default Navbar;
