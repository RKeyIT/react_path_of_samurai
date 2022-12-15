import React from 'react';
import styles from './NavbarItem.module.css';
import {NavLink} from "react-router-dom";
import Button from "../../Action/Button/Button";

const NavbarItem = (props) => {
    return (
        <NavLink to={props.link} className={data => data.isActive ? `${styles.active} ${styles.item}` : styles.item}>
            <Button text={props.name} buttonWrapper={styles.buttonWrapper} button={styles.button}/>
        </NavLink>
    );
};

export default NavbarItem;
