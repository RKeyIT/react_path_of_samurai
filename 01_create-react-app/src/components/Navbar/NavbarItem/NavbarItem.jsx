import React from 'react';
import styles from './NavbarItem.module.css';
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
    return (
        <NavLink to={props.link} className={data => data.isActive ? `${styles.active} ${styles.item}` : styles.item}>
            <li>{props.name}</li>
        </NavLink>
    );
};

export default NavbarItem;
