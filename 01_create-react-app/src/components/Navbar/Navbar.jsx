import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.list}>
                <NavbarItem name='Profile' link='##' />
                <NavbarItem name='Messages' link='##' />
                <NavbarItem name='Community' link='##' />
                <NavbarItem name='Settings' link='##' />
            </ul>
        </nav>
    );
};

export default Navbar;
