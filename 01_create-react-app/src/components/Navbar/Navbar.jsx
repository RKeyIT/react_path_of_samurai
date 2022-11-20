import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.list}>
                <NavbarItem name='Profile' link='/profile' />
                <NavbarItem name='Dialogues' link='/dialogues' />
                <NavbarItem name='Community' link='/community' />
                <NavbarItem name='Settings' link='/settings' />
            </ul>
        </nav>
    );
};

export default Navbar;
