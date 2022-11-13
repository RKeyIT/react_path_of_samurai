import React from 'react';
import styles from './NavbarItem.module.css';

const NavbarItem = () => {
    return (
        <a href='#0' className={styles.item}>
            <li className={styles.text}>NAVBAR_ITEM</li>
        </a>
    );
};

export default NavbarItem;
