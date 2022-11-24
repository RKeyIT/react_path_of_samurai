import React from 'react';
import styles from './HeaderMenuItem.module.css';
import {NavLink} from "react-router-dom";

const HeaderMenuItem = (props) => {
    return (
        <NavLink to={props.link}>
            <li className={styles.item}>{props.name}</li>
        </NavLink>
    );
};

export default HeaderMenuItem;
