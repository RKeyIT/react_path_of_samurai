import React from 'react';
import styles from './NavbarItem.module.css';

const NavbarItem = (props) => {
    return (
        <a href={props.link} className={styles.item}>
            <li className={styles.text}>{props.name}</li>
        </a>
    );
};

export default NavbarItem;
