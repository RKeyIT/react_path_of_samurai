import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.list}>
                <NavbarItem />
                <NavbarItem />
                <NavbarItem />
                <NavbarItem />
                <NavbarItem />
                <NavbarItem />
                <NavbarItem />
            </ul>
        </nav>
    );
};

export default Navbar;
